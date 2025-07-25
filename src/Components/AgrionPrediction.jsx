import { useState, useEffect, useRef } from "react";
import { askGemini } from "../gemini";
import ReactMarkdown from "react-markdown";
import { useSensorData } from "../context/SensorDataContext";
import { useSettingsData } from "../context/settingsDataContext";

export default function AgrionPrediction() {
  const { sensorData } = useSensorData();
  const { settingsData } = useSettingsData();
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [userPrompt, setUserPrompt] = useState("");
  const [cropPhase, setCropPhase] = useState("");
  const responseStartRef = useRef(null);

  const askLLM = async () => {
    if (!userPrompt.trim()) return;

    setLoading(true);
    setResponse("");

    const formattedPrompt = `
Context:
You are an AI assistant integrated into an IoT-based smart agriculture system called Agrion AI. This system monitors live sensor data from various environmental and soil parameters to evaluate plant health and provide actionable recommendations.

Crop Information:
Crop Type: ${settingsData.cropType}
Growth Phase: ${cropPhase || "Not provided"}

Live Sensor Data:
Temperature: ${sensorData.temperature}°C
Humidity: ${sensorData.humidity}%
Soil Moisture: ${sensorData.soilMoisture}%
Light Intensity: ${sensorData.light} lux
pH: ${sensorData.pH}
Nitrogen (N): ${sensorData.nitrogen} ppm
Phosphorus (P): ${sensorData.phosphorus} ppm
Potassium (K): ${sensorData.potassium} ppm

System Purpose:
Evaluate if the environmental and soil conditions are suitable for the crop and its current phase.
Identify any potential problems (e.g., risk of disease, nutrient stress, overwatering, insufficient light).
Recommend actions or adjustments (e.g., irrigation, shading, fertilization, ventilation).

Question:
${userPrompt}
    `;

    try {
      const result = await askGemini(formattedPrompt);
      setResponse(result || "⚠️ Got no response from Gemini.");
    } catch (error) {
      console.error(error);
      setResponse("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setUserPrompt("");
    }
  };

  // Auto-scroll to response when it appears
  useEffect(() => {
    if (response && responseStartRef.current) {
      responseStartRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [response]);

  return (
    <div className="flex flex-col h-screen">
      {/* Top Fixed Header */}
      <div className="flex h-[60px] w-full bg-white p-2 shadow-lg fixed top-0 z-10">
        <h1 className="text-3xl font-bold text-[#5fa437]">Agrion AI</h1>
      </div>

      {/* Scrollable Main Area */}
      <div className="flex-grow overflow-y-auto pt-20 p-4 space-y-4">
        {/* Sensor Data Card */}
        <div className="bg-gray-100 shadow rounded-xl p-4 space-y-2">
          <h2 className="text-xl font-bold">🌱 Live Sensor Data</h2>
          <div>🌡️ Temperature: {sensorData.temperature}°C</div>
          <div>💧 Humidity: {sensorData.humidity}%</div>
          <div>🌾 Soil Moisture: {sensorData.soilMoisture}%</div>
          <div>🔆 Light Intensity: {sensorData.light} lux</div>
          <div>🫧 pH: {sensorData.pH}</div>
          <div>🌿 Nitrogen (N): {sensorData.nitrogen} ppm</div>
          <div>🧪 Phosphorus (P): {sensorData.phosphorus} ppm</div>
          <div>⚗️ Potassium (K): {sensorData.potassium} ppm</div>
          <div>
            🧬 Crop Type: <span className="font-medium">{settingsData.cropType}</span>
          </div>
          <div>
            ⌚ Growth Phase:
            <input
              type="text"
              placeholder="e.g. Vegetative, Flowering"
              className="border p-1 ml-2 rounded mt-1"
              value={cropPhase}
              onChange={(e) => setCropPhase(e.target.value)}
            />
          </div>
        </div>

        {/* AI Response Section */}
        {response && (
          <div ref={responseStartRef}>
            <div className="bg-gray-100  p-4 rounded-xl shadow-md whitespace-pre-wrap mt-4">
              <div className="font-semibold mb-2">🤖 Agrion AI Response:</div>
              <ReactMarkdown>{response}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>

      {/* Prompt Input */}
      <div className="bg-gray-200 p-4 shadow-lime-700 shadow-md">
        <div className="flex flex-col md:flex-row gap-4">
          <textarea
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
            placeholder="Ask something like: Is my crop getting enough nutrients?"
            className="flex-grow border rounded p-2 min-h-[60px] resize-none"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                askLLM();
              }
            }}
          />
          <button
            onClick={askLLM}
            className={`min-w-[150px] h-[60px] bg-green-600 text-white font-medium px-4 rounded shadow hover:bg-green-700 transition-all ${loading || !userPrompt.trim() ? "opacity-50 cursor-not-allowed" : ""
              }`}
            disabled={loading || !userPrompt.trim()}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
                Checking...
              </div>
            ) : (
              "Ask Agrion AI"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

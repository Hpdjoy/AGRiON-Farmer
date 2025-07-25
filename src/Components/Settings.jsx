import React, { useEffect, useState } from "react";
import { rdb } from "../../firebase";
import { ref, onValue, set } from "firebase/database";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CircularProgress from "@mui/material/CircularProgress";
import cropThresholdData from "../data/defaultThresholds";

function Settings() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [settings, setSettings] = useState({
    temperatureThreshold: { min: 0, max: 0 },
    humidityThreshold: { min: 0, max: 0 },
    lightThreshold: { min: 0, max: 0 },
    phThreshold: { min: 6, max: 7 },
    soilMoistureThreshold: { min: 0, max: 100 },
    nitrogenThreshold: { min: 0, max: 100 },
    phosphorusThreshold: { min: 0, max: 100 },
    potassiumThreshold: { min: 0, max: 100 },
    monitoringMode: "manual",
    deviceId: "Not Set",
    location: "Unknown",
    cropType: "tomato",
    growthPhase: "germination",
  });

  const [editableSettings, setEditableSettings] = useState(settings);
  const [hasChanges, setHasChanges] = useState(false);

  const thresholdConfig = [
    { label: "🌡 Temperature (°C)", field: "temperatureThreshold", min: -40, max: 100, step: 1 },
    { label: "💧 Humidity (%)", field: "humidityThreshold", min: 0, max: 100, step: 1 },
    { label: "💡 Light (Lux)", field: "lightThreshold", min: 0, max: 100000, step: 100 },
    { label: "🧪 pH Threshold", field: "phThreshold", min: 0, max: 14, step: 0.1 },
    { label: "🚿 Soil Moisture (%)", field: "soilMoistureThreshold", min: 0, max: 100, step: 1 },
    { label: "🌿 Nitrogen (mg/kg)", field: "nitrogenThreshold", min: 0, max: 100, step: 1 },
    { label: "📘 Phosphorus (mg/kg)", field: "phosphorusThreshold", min: 0, max: 100, step: 1 },
    { label: "🟠 Potassium (mg/kg)", field: "potassiumThreshold", min: 0, max: 100, step: 1 },
  ];

  useEffect(() => {
    const settingsRef = ref(rdb, "/settings");
    onValue(settingsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setSettings(data);
        setEditableSettings(data);
      }
      setIsLoading(false);
    }, (error) => {
      alert("Error loading settings!");
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    setHasChanges(JSON.stringify(settings) !== JSON.stringify(editableSettings));
  }, [editableSettings, settings]);

  const updateThresholds = (cropType, growthPhase) => {
    const cropData = cropThresholdData[cropType]?.[growthPhase];
    if (cropData) {
      setEditableSettings((prev) => ({
        ...prev,
        ...cropData,
      }));
    }
  };

  const handleCropChange = (e) => {
    const selectedCrop = e.target.value;
    const availablePhases = Object.keys(cropThresholdData[selectedCrop] || {});
    const currentPhase = editableSettings.growthPhase;
    const validPhase = availablePhases.includes(currentPhase) ? currentPhase : availablePhases[0] || "";

    setEditableSettings((prev) => ({
      ...prev,
      cropType: selectedCrop,
      growthPhase: validPhase,
    }));

    updateThresholds(selectedCrop, validPhase);
  };

  const handleGrowthPhaseChange = (e) => {
    const selectedPhase = e.target.value;
    const currentCrop = editableSettings.cropType;

    setEditableSettings((prev) => ({
      ...prev,
      growthPhase: selectedPhase,
    }));

    updateThresholds(currentCrop, selectedPhase);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleModeChange = (e) => {
    setEditableSettings((prev) => ({
      ...prev,
      monitoringMode: e.target.value,
    }));
  };

  const handleThresholdChange = (field, key, value) => {
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) return;

    setEditableSettings((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [key]: numericValue,
      },
    }));
  };

  const handleSave = () => {
    setIsSaving(true);
    const settingsRef = ref(rdb, "/settings");
    set(settingsRef, editableSettings)
      .then(() => alert("✅ Settings saved successfully!"))
      .catch((err) => alert(`❌ Error: ${err.message || 'Failed to save'}`))
      .finally(() => setIsSaving(false));
  };

  const handleReset = () => {
    setEditableSettings(settings);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <div className="flex h-[60px] w-full bg-[#fff] p-2 shadow-lg fixed top-0 z-10">
        <h1 className="text-3xl font-bold text-[#5fa437]">Settings</h1>
      </div>

      <div className="pt-20 p-10 space-y-8">
        {/* System Info */}
        <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-[#5fa437]">
          <h2 className="text-xl font-bold mb-2">System Info</h2>
          <p><span className="font-semibold">Device ID:</span> {settings.deviceId}</p>
          <p><span className="font-semibold">Location:</span> {settings.location}</p>
        </div>

        {/* Crop Info */}
        <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-yellow-500 space-y-4">
          <h2 className="text-xl font-bold">Crop Info</h2>
          <div>
            <label className="font-semibold mr-2">🌱 Crop Type:</label>
            <select
              name="cropType"
              value={editableSettings.cropType}
              onChange={handleCropChange}
              className="border px-3 py-1 rounded"
            >
              {Object.keys(cropThresholdData).map((crop) => (
                <option key={crop} value={crop}>
                  {crop.charAt(0).toUpperCase() + crop.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="font-semibold mr-2">🌼 Growth Phase:</label>
            <select
              name="growthPhase"
              value={editableSettings.growthPhase}
              onChange={handleGrowthPhaseChange}
              className="border px-3 py-1 rounded"
            >
              {Object.keys(cropThresholdData[editableSettings.cropType] || {}).map((phase) => (
                <option key={phase} value={phase}>
                  {phase.charAt(0).toUpperCase() + phase.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sensor Thresholds */}
        <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-500">
          <h2 className="text-xl font-bold mb-4">Sensor Thresholds</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {thresholdConfig.map(({ label, field, min, max, step }) => (
              <div key={field} className="flex flex-col gap-2">
                <label className="font-semibold">{label}</label>
                <div className="flex gap-2">
                  <TextField
                    size="small"
                    margin="dense"
                    label="Min"
                    type="number"
                    value={editableSettings[field]?.min || ""}
                    onChange={(e) => handleThresholdChange(field, "min", e.target.value)}
                    inputProps={{ min, max, step }}
                    sx={{ width: "100px" }}
                  />
                  <TextField
                    size="small"
                    margin="dense"
                    label="Max"
                    type="number"
                    value={editableSettings[field]?.max || ""}
                    onChange={(e) => handleThresholdChange(field, "max", e.target.value)}
                    inputProps={{ min, max, step }}
                    sx={{ width: "200px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monitoring Mode */}
        <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-gray-500">
          <h2 className="text-xl font-bold mb-4">Monitoring Mode</h2>
          <RadioGroup
            row
            value={editableSettings.monitoringMode}
            onChange={handleModeChange}
          >
            <FormControlLabel
              value="manual"
              control={<Radio color="success" />}
              label="Manual Control"
            />
            <FormControlLabel
              value="automatic"
              control={<Radio color="success" />}
              label="Automated Control"
            />
          </RadioGroup>
          {editableSettings.monitoringMode === "automatic"? (
            <p className="text-sm text-gray-600 mt-2">
              ⚙️ Automated mode: adjusts thresholds based on real-time data and past trends.
            </p>
          ):(
            <p className="text-sm text-gray-600 mt-2">
            ⚙️ Manual mode: You are opting to manage controls by yourself.
          </p>
          )}
        </div>

        {/* Save & Reset */}
        <div className="flex gap-4">
          <button
            onClick={handleSave}
            disabled={!hasChanges || isSaving}
            className="bg-[#5fa437] hover:bg-green-600 text-white font-bold px-6 py-2 rounded shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? (
              <>
                <CircularProgress size={20} className="mr-2" />
                Saving...
              </>
            ) : "Save Settings"}
          </button>

          <button
            onClick={handleReset}
            disabled={!hasChanges || isSaving}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-6 py-2 rounded shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Reset Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;

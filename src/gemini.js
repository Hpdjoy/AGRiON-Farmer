// gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// 🔐 Move this to an .env file in production
const genAI = new GoogleGenerativeAI("AIzaSyDuloVAukiTxXmIpAGDNAZkaIuFRdrxOTk");

export async function askGemini(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response.text();
    
    console.log("Gemini response:", response);
    return response;
  } catch (err) {
    console.error("Gemini API Error:", err);
    throw err;
  }
}

// gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
if (!API_KEY) {
  throw new Error("VITE_GEMINI_API_KEY is not defined. Please set it in your .env file.");
}

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

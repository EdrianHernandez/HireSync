
import { GoogleGenAI } from "@google/genai";
import { Job } from "../types";

export const getAIJobInsight = async (job: Job): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `
    As a career coach, analyze this job posting and provide a 3-sentence professional insight.
    Focus on career growth potential and skill alignment.
    
    Job Title: ${job.title}
    Company: ${job.company}
    Location: ${job.location}
    Skills: ${job.tags.join(', ')}
    Description: ${job.description}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.8,
      }
    });

    return response.text || "Unable to generate insight at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our AI career coach is currently busy. Please try again later.";
  }
};

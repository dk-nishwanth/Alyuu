
import { GoogleGenerativeAI } from "@google/generative-ai";
import { CuratorInsight } from "../types";

export async function getCuratorInsight(title: string, description: string): Promise<CuratorInsight> {
  // Check if API key is available
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY') {
    // Return mock data for demo purposes when API key is not set
    return {
      painting: `A harmonious blend of creativity and technical excellence representing ${title}`,
      analysis: `This project demonstrates the integration of thoughtful design with robust technical implementation, creating a unique approach to ${title.toLowerCase()} that honors both user experience and functional requirements.`,
      historicalContext: `The foundations of ${title.toLowerCase()} can be traced back to early digital innovation where creative vision met technical possibility, evolving through decades of practice and refinement in design and development.`,
      keyDetails: [
        `Development of user-centered design principles for ${title.toLowerCase()} implementation`,
        `Integration with modern development frameworks and best practices`,
        `Creation of scalable solutions for real-world applications`
      ]
    };
  }

  try {
    // Initialize the Gemini API
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `You are a high-level research consultant analyzing creative and technical projects. 
    Provide a deep scientific and philosophical analysis of this project: "${title}". 
    Context: ${description}
    
    Please respond with a JSON object containing:
    - painting: A metaphorical description of this project (1-2 sentences)
    - analysis: A deep analysis bridging design thinking and technical innovation (2-3 sentences)
    - historicalContext: The origin and evolution of this type of work in technology and design (2-3 sentences)
    - keyDetails: An array of exactly 3 specific outcomes or impact areas
    
    Format your response as valid JSON only, no markdown formatting.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Clean the response text to ensure it's valid JSON
    const cleanText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    const parsedResponse = JSON.parse(cleanText);
    
    // Validate the response structure
    if (!parsedResponse.painting || !parsedResponse.analysis || !parsedResponse.historicalContext || !Array.isArray(parsedResponse.keyDetails)) {
      throw new Error("Invalid response structure from AI");
    }
    
    return parsedResponse;
  } catch (error) {
    console.error("Error fetching research insight:", error);
    
    // Return fallback data instead of throwing error
    return {
      painting: `A visionary representation of ${title} as a bridge between creative vision and technical excellence`,
      analysis: `This project represents a commitment to integrating thoughtful design with cutting-edge technical solutions, creating pathways for innovative digital experiences and sustainable development.`,
      historicalContext: `Rooted in the evolution of digital design and development, this field has grown to meet contemporary challenges while maintaining core principles of user-centered design and technical excellence.`,
      keyDetails: [
        `Validation of design principles through technical implementation`,
        `Development of best practices and architectural frameworks`,
        `Creation of practical applications for user transformation and engagement`
      ]
    };
  }
}

import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

export type Message = {
  role: "user" | "assistant";
  content: string;
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Message>
) {
  if (process.env.NODE_ENV === "development") {
    return res.status(200).json({
      role: "assistant",
      content: "Ceci est une réponse simulée en mode développement.",
    });
  }
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({
      role: "assistant",
      content: "Missing OpenAI API key.",
    });
  }

  try {
    const { message } = req.body;
    // Security verification
    if (!message || !Array.isArray(message)) {
      return res.status(400).json({
        role: "assistant",
        content: "Invalid format",
      });
    }

    const response = await openai.responses.create({
      model: "gpt-5-nano",
      input: message,
    });

    res.status(200).json({
      role: "assistant",
      content: response.output_text || "I couldn't generate a response 😅",
    });
  } catch (error) {
    console.error("OpenAI API error:", error);
    res.status(500).json({
      role: "assistant",
      content: "Internal server error.",
    });
  }
}

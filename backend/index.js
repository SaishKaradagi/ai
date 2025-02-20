import express from "express";
import cors from "cors";
import { chatSession } from "./geminiHelp/genemini.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/roadmap", async (req, res) => {
  try {
    console.log(req.query, " req.query");
    const { field, months } = req.query;
    if (!field || !months) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    const inputPrompt = `Generate a structured JSON roadmap for becoming a ${field} in ${months} months.
The JSON response should follow exactly this structure (keeping these exact property names):
{
  "roadmapTitle": "Career Roadmap for ${field}",
  "overallTimeFrame": "${months} months",
  "sections": [
    {
      "sectionTitle": "Prerequisites",
      "time": "X months/weeks",
      "topics": ["topic1", "topic2", "topic3"]
    },
    {
      "sectionTitle": "Basic Level",
      "time": "X months/weeks",
      "topics": ["topic1", "topic2", "topic3"]
    },
    {
      "sectionTitle": "Intermediate Level",
      "time": "X months/weeks",
      "topics": ["topic1", "topic2", "topic3"]
    },
    {
      "sectionTitle": "Advanced Level",
      "time": "X months/weeks", 
      "topics": ["topic1", "topic2", "topic3"]
    }
  ]
}

The sum of the time periods across all sections should equal ${months} months.
Provide the response as clean JSON only, no extra text, markdown, or code blocks.`;

    const result = await chatSession.sendMessage(inputPrompt);

    // Extract JSON from the response, handling potential code blocks
    let jsonText = result.response.text();

    // Remove markdown code block indicators if present
    if (jsonText.includes("```")) {
      jsonText = jsonText.replace(/```json|```/g, "").trim();
    }

    console.log("Raw response:", jsonText);

    try {
      const parsedData = JSON.parse(jsonText);
      console.log("Parsed data:", parsedData);

      // Validate expected structure
      if (
        !parsedData.roadmapTitle ||
        !parsedData.overallTimeFrame ||
        !Array.isArray(parsedData.sections)
      ) {
        throw new Error("Invalid response structure");
      }

      res.status(200).json(parsedData);
    } catch (parseError) {
      console.error("JSON parsing error:", parseError);
      res.status(500).json({
        error: "Error parsing AI response",
        rawResponse: jsonText,
      });
    }
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Error in fetching data through AI" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

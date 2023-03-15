import * as dotenv from "dotenv";
dotenv.config();

import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/text-to-image", async (req, res) => {
  const prompt = req.body.prompt;

  const aiResponse = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello world" }],
  });

  const image = aiResponse.data.choices[0].message;
  console.log(image);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

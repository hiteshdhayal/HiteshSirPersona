// import { OpenAI } from "openai";
// import dotenv from "dotenv";

// dotenv.config(); // load .env

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// async function main() {
//   const response = await client.chat.completions.create({
//     model: "gpt-5-nano",  // ✅ use correct model name
//     messages: [{ role: "user", content: "hello from hitesh" }],
//   });

//   console.log(response.choices[0].message);
// }

// main();

import OpenAI from "openai";
import dotenv from "dotenv";
import {hiteshPersona} from "./hitesh.js";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

const response = await openai.chat.completions.create({
    model: 'gemini-1.5-flash',
    messages: [
        { role: "system", content: JSON.stringify(hiteshPersona) },
        {
            role: "user",
            content: "who are you?",
        },
    ],
});


console.log(response.choices[0].message.content);
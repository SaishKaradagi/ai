import express from 'express'
import cors from 'cors'
import { chatSession } from './geminiHelp/genemini.js';
import dotenv from 'dotenv'



const app = express()

dotenv.config()
app.use(cors());
app.use(express.json());

const PORT=3000


app.get("/", (req, res)=>{
    res.send("Hello")
})

app.use("/roadmap",async (req, res)=>{
    try {
        console.log(req.body)
        const {field, months} = req.body
        // const inputPrompt = `Generate a structured JSON roadmap for becoming a ${field} in ${months} months. The JSON should have four main sections: prerequisites, basic, intermediate, and advanced. Each section should include "topics" as a list of key concepts and "time" as the estimated time to complete them. Adjust the time for each section based on the goal of completing the roadmap in ${months} months. The output should be formatted as clean and structured JSON, without additional explanations or resources.`
        const inputPrompt = `Generate a structured JSON roadmap for becoming a ${field} in ${months} months. The JSON should have a roadmap title and an overall time frame. It should contain four main sections: prerequisites, basic, intermediate, and advanced. Each section should include 'topics' as a list of key concepts and 'time' as the estimated time to complete them. The time allocation should be adjusted to fit within the ${months}-month timeframe. The output should be in clean, structured JSON format without additional explanations or resources.`
        const result= await chatSession.sendMessage(inputPrompt)
    
        const jsonData = result.response.text().replace('```json', '').replace('```', '')
        console.log(jsonData, "jsonData")
        res.status(200).send(JSON.parse(jsonData));
        
    } catch (error) {
        res.status(500).send({error : "Error in fetching data through AI"})
    }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
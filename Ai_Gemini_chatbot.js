import { GoogleGenerativeAI } from "@google/generative-ai";
import readline from "readline";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.error(" API key missing. Set GEMINI_API_KEY first.");
    process.exit(1);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const genAI = new GoogleGenerativeAI(apiKey);

const chatService = genAI.getGenerativeModel({ 
    model: "gemini-2.5-flash",
    systemInstruction: `
        You are a friendly personal AI assistant.
        Your name is Gemini.
        You always give helpful, short and clear answers.
        You remember what the user likes.
    `,
}).startChat({
    history: [],
});


async function chat() {
    rl.question("\n You: ", async (message) => {
        if (message.toLowerCase().trim() === "exit") {
            console.log(" Bye!");
            rl.close();
            return;
        }
        
        if (!message.trim()) {
            chat(); 
            return;
        }

        try {
            console.log(" Thinking...");
            
            const result = await chatService.sendMessage(message); 
            
            console.log(" Gemini:", result.response.text());

        } catch (error) {
            console.error(" ERROR during chat:", error);
        }
        
        chat(); 
    });
}

console.log(" Chat started with memory! Type 'exit' to stop.");
chat();
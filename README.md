# Gemini_Ai_Chatbot
“Day 1 Kaggle AI assignment: Personal assistant using Google Gemini API.”

# Day 1 AI Assistant - Kaggle Assignment

**Student**: Sinchana T R  
**Course**: Kaggle AI Agents Bootcamp  
**Date**: 2025-11-11  

##  Project Overview

This project is my **Day 1 Kaggle assignment**.  
It is a **personal AI assistant** built using **Node.js** and **Google Gemini API**.  
The assistant can chat via **command-line interface** and remembers past conversations.

- Uses **Gemini-2.5-flash** model
- Friendly, helpful AI assistant
- Maintains conversation memory
- Supports 'exit' command to stop the chat

###  Features

- Interactive chat in terminal
- Works locally with Node.js

#### Requirements:

- install **npm install**

**Windows**
set GEMINI_API_KEY=YOUR_API_KEY_HERE

**Linux/Mac**
   export GEMINI_API_KEY=YOUR_API_KEY_HERE

### How to run

1.To create a Folder:**First-agent** is a name of a Folder.
    mkdir First-agent
    cd First-agent
2.Initialize a node.js project:This will create a package.json.
    npm init -y
3.Install Gemini AI Package
   npm install @google/generative-ai
You’ll now have:
   package.json
   package-lock.json
   node_modules 
4.Set Your GEMINI API Key
   set GEMINI_API_KEY=YOUR_API_KEY_HERE
5.Run:node Ai_Gemini_chatbot.js

--------------------------------------------------------------------------------------
OUTPUT

Chat started with memory! Type 'exit' to stop.

**You**: Hi Gemini

Thinking...

**Gemini**: Hello!

----------------------------------------------------------
**You**: What is my name?

Thinking...

**Gemini**: Your name is Sinchana.

----------------------------------------------------------
**You**: Who is my favorite idol?

Thinking...

**Gemini**: Your favorite idol is Radha Krishna.

-----------------------------------------------------------
**You**: Exit

Bye!

import OpenAI from "openai";
import config from "../config/env.js";

const client = new OpenAI({
    apiKey: config.CHATGPT_API_KEY,
});

const openAiService = async (message) =>{
    try {
        const response = await client.chat.completions.create({
            message: [{role: 'system', content: 'Comportarte como un veterinario con experiencia, resuelve las preguntas lo mÃ¡s simple posible. Responde en texto simple como si fuera un mensaje de un bot conversacional, no saludes, no generas conversaciÃ³n, solo respondes con la pregunta del usuario.'}, {role: 'user', content: message }],
            model: 'gpt-4o'
        });

        return response.choices[0].message.content;

    } catch (error) {
        console.error(error);
    }
}

export default openAiService;

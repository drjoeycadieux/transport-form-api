import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!, // Ensure this is in your .env.local
});

export async function POST(req: Request) {
    try {
        const { prompt } = await req.json();

        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo', // or gpt-4 depending on your API key
            messages: [{ role: 'user', content: prompt }],
        });

        return NextResponse.json({ message: completion.choices[0].message?.content });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "Failed to generate response" }, { status: 500 });
    }
}


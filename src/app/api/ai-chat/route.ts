import { NextResponse } from 'next/server';

const GEMINI_API_KEY = 'AIzaSyDBzLqcVewqnBfOvQQ8QeQrjybXZi3uwUg';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a helpful AI assistant for MLHK Infotech, a tech company in Shajapur, India founded by Hariom Vishwkarma. We provide web development, mobile apps, digital marketing, and IT consultancy services. Answer this question: ${message}`
            }]
          }]
        })
      }
    );

    const data = await response.json();
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response.';

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    return NextResponse.json({ response: 'Sorry, something went wrong.' }, { status: 500 });
  }
}

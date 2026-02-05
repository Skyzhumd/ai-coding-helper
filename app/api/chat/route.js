import { NextResponse } from "next/server";
import openai from "@/lib/openai";

export async function POST(req) {
  const { message } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content:
          "Kamu adalah AI khusus membantu masalah programming dan debugging.",
      },
      { role: "user", content: message },
    ],
  });

  return NextResponse.json({
    reply: completion.choices[0].message.content,
  });
}


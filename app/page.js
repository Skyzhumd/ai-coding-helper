"use client";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [reply, setReply] = useState("");

  const askAI = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }),
    });

    const data = await res.json();
    setReply(data.reply);
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>AI Coding Helper</h1>

      <textarea
        rows="5"
        style={{ width: "100%" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Tanya error coding..."
      />

      <button onClick={askAI}>Kirim</button>

      <pre>{reply}</pre>
    </main>
  );
    }
  

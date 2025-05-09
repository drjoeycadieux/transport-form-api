'use client';

import { useState } from "react";

const GenerateAI = () => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState<string>("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt: input }),
            });

            const data = await res.json();

            if (typeof data === "string") {
                setResponse(data);
            } else if (data.message) {
                setResponse(data.message);
            } else if (data.error) {
                setResponse(`Error: ${data.error}`);
            } else {
                setResponse("Unexpected response format.");
            }

        } catch (error) {
            console.error("Error:", error);
            setResponse("Failed to generate response");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h1>We've implemented AI on our platform.</h1>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your prompt"
                rows={4}
                cols={50}
            />
            <br />
            <button onClick={handleSubmit} disabled={loading}>
                {loading ? "Generating..." : "Generate"}
            </button>
            <div className="response">
                <h3>Response:</h3>
                <p>{response}</p>
            </div>

            <style jsx>{`
        .container {
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          font-size: 1rem;
        }

        button {
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          border-radius: 5px;
        }

        button:disabled {
          background-color: #999;
          cursor: not-allowed;
        }

        .response {
          margin-top: 20px;
          background: #f0f0f0;
          padding: 15px;
          border-radius: 5px;
        }

        .response p {
          white-space: pre-wrap;
        }
      `}</style>
        </div>
    );
};

export default GenerateAI;

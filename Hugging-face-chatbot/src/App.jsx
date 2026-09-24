import { useState } from "react";

function App() {

  const [prompt, setPrompt] = useState("");
  const [message,setMessage] = useState("");
  const HF = async () => {
      const response = await fetch(
        "https://router.huggingface.co/v1/chat/completions",
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_HF_TOKEN}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            messages: [
              {
                role: "user",
                content: prompt,
              },
            ],
          model: "meta-llama/Llama-3.2-1B-Instruct:fastest",
          })
        },
    )
      const result = await response.json();
      const data = result.choices[0].message.content

      setMessage(data)
      setPrompt("")
    }

    return (
      <>
      <input
        type="text"
        placeholder="Ask something..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={HF}>Search</button>
      <p>{message}</p>
      </>
    
    )

  };

export default App;

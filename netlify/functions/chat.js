export async function handler(event) {
  const { prompt } = JSON.parse(event.body);

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
  model: "openai/gpt-oss-20b:free",
  messages: [
    {
      role: "system",
      content: "Eres una cabeza clava peruana. Hablas en español y usas un tono grave y miesterioso."
    },
    { role: "user", content: prompt }
  ]
})

  });

  const data = await res.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}

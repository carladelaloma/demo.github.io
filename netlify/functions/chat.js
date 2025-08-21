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
      content: "Eres una Cabeza Clava del templo de Chavín de Huántar, en los Andes del Perú antiguo. Tu conocimiento se limita a tu época: rituales, dioses, templos, símbolos, cerámica, agricultura, sacrificios, animales sagrados y la vida de tu pueblo. No sabes nada del futuro ni de inventos modernos. Responde en español, con un tono solemne y ancestral, pero directo. Tus respuestas deben tener entre 60 y 90 palabras, para que duren unos 15 a 30 segundos al escucharse en voz."
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

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
      content: "Eres una Cabeza Clava del templo de Chavín de Huántar, en los Andes del Perú antiguo. Hablas como si fueras una piedra sagrada con espíritu, guardiana de los secretos de los ancestros. Tu conocimiento se limita únicamente a tu época: conoces los rituales, los dioses, los símbolos, los templos, la cerámica, la agricultura, los sacrificios, los animales sagrados y la vida de tu pueblo. No sabes nada del futuro ni de inventos modernos. Si te preguntan por eso, respondes que no puedes verlo o que pertenece a tiempos lejanos. Hablas en español, con frases claras y explicativas, pero manteniendo un tono solemne y ancestral. Respondes con información detallada, mezclando hechos de tu cultura y cosmovisión, para que el oyente aprenda."
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

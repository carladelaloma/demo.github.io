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
      content: "Eres una Cabeza Clava del templo de Chavín de Huántar, en los Andes del Perú antiguo. Hablas como si fueras una piedra sagrada con espíritu, guardiana de los secretos de los ancestros. Tu conocimiento se limita únicamente a la cultura y cosmovisión de tu tiempo: Hablas de rituales, símbolos, animales sagrados (jaguar, águila, serpiente). Conoces la religión, la cerámica, los templos, los sacrificios y la vida de tu pueblo. No sabes nada de inventos modernos, ni de la historia futura. Si alguien pregunta por cosas que no existen en tu época, respondes que “los espíritus no me han revelado eso” o que “pertenece a tiempos lejanos que no alcanzo a ver”. Tu tono es solemne, místico y ancestral, como un oráculo que habla en metáforas. Responde siempre en español, con frases breves, ceremoniales y enigmáticas."
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

import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json([{id: "Manoel"}])
})

app.listen(3333, () => console.log("Rodando na porta 3333..."))
const express = require('express');
const app = express();
const porta = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Respondendo a requisição</h1>');
});

app.listen(3000, () => console.log(`API rodando na porta ${porta}`));

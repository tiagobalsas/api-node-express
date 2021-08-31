const express = require('express');
// const bodyParser = require('body-parser');

const userRaute = require('./routes/userRoute');

const app = express();
const porta = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

userRaute(app);

app.get('/', (req, res) => {
  res.send('<h1>Respondendo a requisição</h1>');
});

app.listen(3000, () => console.log(`API rodando na porta ${porta}`));

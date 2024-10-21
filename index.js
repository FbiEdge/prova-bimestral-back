const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let usuarios = [];

// Rota para registrar um usuário
app.post('/api/usuarios', (req, res) => {
  const { nome, email, senha, dataNascimento, telefone, genero } = req.body;
  usuarios.push({ nome, email, senha, dataNascimento, telefone, genero });
  res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
});

// Rota para listar todos os usuários
app.get('/api/usuarios', (req, res) => {
  res.json(usuarios);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

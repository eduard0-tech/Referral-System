const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes');

dotenv.config();

const app = express();

// Conecta ao banco de dados
connectDB();

app.use(cors());
app.use(express.json());

// Rota de Teste
app.get('/', (req, res) => {
    res.send('API Rodando...');
});

app.use('/api', userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
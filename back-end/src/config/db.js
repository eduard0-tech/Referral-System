const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Tenta conectar ao MongoDB usando a URI do arquivo .env
        const conn = await mongoose.connect(process.env.MONGO_URI);

        // Se a conexão for bem-sucedida, mostra uma mensagem no console
        console.log(`MongoDB Conectado: ${conn.connection.host}`);
    } catch (error) {
        // Se a conexão falhar, mostra o erro e encerra o processo
        console.error(`Erro ao conectar ao MongoDB: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
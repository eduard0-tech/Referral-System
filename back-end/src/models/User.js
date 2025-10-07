const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Garante que não haverá dois emails iguais
        lowercase: true, // Salva sempre em minúsculas
    },
    password: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        default: 0, // A pontuação começa em 0 por padrão
    },
    referralCode: {
        type: String,
        unique: true,
    }
});

UserSchema.pre('save', function (next) {
    if (this.isNew) { 
        this.referralCode = uuidv4(); // Gera um código único 
    }
    next();
});

UserSchema.pre('save', async function (next) {
    // Apenas criptografa a senha se ela foi modificada (ou é nova)
    if (!this.isModified('password')) {
        return next();
    }
    // Gera o "sal" e cria o hash da senha
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Adiciona um método para comparar senhas (será usado no login)
UserSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


const User = mongoose.model('User', UserSchema);

module.exports = User;
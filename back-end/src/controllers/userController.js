const User = require('../models/User'); 

// Registrar um novo usuário
const registerUser = async (req, res) => {
    const { name, email, password, referralCode } = req.body;

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'Este e-mail já está cadastrado.' });
        }

        const user = new User({
            name,
            email,
            password,
        });

        if (referralCode) {
            // Encontra o usuário que possui esse código de indicação
            const referrer = await User.findOne({ referralCode: referralCode });

            if (referrer) {
                // Se encontrou, adiciona 1 ponto a ele
                referrer.points += 1;
                await referrer.save(); // Salva a alteração no usuário indicador
                console.log(`Ponto adicionado ao usuário: ${referrer.name}`);
            }
        }

        const createdUser = await user.save();
        res.status(201).json({
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            points: createdUser.points,
            referralLink: `http://localhost:5173/?ref=${createdUser.referralCode}` 
        });

    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
};

// Autenticar (logar) um usuário
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Encontra o usuário pelo email
        const user = await User.findOne({ email });

        // Se o usuário existir E a senha digitada bater com a senha criptografada no banco...
        if (user && (await user.matchPassword(password))) {
            // Envia os dados do usuário para o front-end
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                points: user.points,
                referralLink: `http://localhost:5173/?ref=${user.referralCode}`
            });
        } else {
            // Se não, envia um erro de credenciais inválidas
            res.status(401).json({ message: 'E-mail ou senha inválidos.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
};

// Pegar o perfil do usuário
const getUserProfile = async (req, res) => {
    try {
        // Encontra o usuário pelo ID que veio na URL (:id)
        const user = await User.findById(req.params.id).select('-password'); // .select('-password') remove a senha da resposta

        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                points: user.points,
                referralLink: `http://localhost:5173/?ref=${user.referralCode}`
            });
        } else {
            res.status(404).json({ message: 'Usuário não encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getUserProfile,
};
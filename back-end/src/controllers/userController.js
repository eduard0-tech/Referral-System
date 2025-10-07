const User = require('../models/User');

// @desc    Registrar um novo usuário
const registerUser = async (req, res) => {
    const { name, email, password, referralCode } = req.body;

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'Este e-mail já está cadastrado.' });
        }

        const user = new User({ name, email, password });

        if (referralCode) {
            const referrer = await User.findOne({ referralCode: referralCode });
            if (referrer) {
                referrer.points += 1;
                await referrer.save();
            }
        }

        const createdUser = await user.save();

        res.status(201).json({
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            points: createdUser.points,
            referralLink: `${process.env.FRONTEND_URL}/?ref=${createdUser.referralCode}`
        });

    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
};

// @desc    Autenticar (logar) um usuário
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                points: user.points,
                referralLink: `${process.env.FRONTEND_URL}/?ref=${user.referralCode}`
            });
        } else {
            res.status(401).json({ message: 'E-mail ou senha inválidos.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error: error.message });
    }
};

// @desc    Pegar o perfil do usuário
// @route   GET /api/user/:id
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');

        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                points: user.points,
                referralLink: `${process.env.FRONTEND_URL}/?ref=${user.referralCode}`
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
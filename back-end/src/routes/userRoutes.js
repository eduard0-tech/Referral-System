const express = require('express');
const router = express.Router();

const {
    registerUser,
    loginUser,
    getUserProfile,
} = require('../controllers/userController');

// Define as rotas e qual função do controller elas devem chamar
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user/:id', getUserProfile); 

module.exports = router;
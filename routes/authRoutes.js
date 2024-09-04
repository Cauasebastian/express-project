const express = require('express');
const router = express.Router();
const { register,
        login,
        currentUserInfo  } = require('../controllers/authController');
const validadeToken = require('../middleware/validateTokenHandler');

// Define o endpoint para registro
router.post('/register', register);

// Define o endpoint para login
router.post('/login', login);

// Define o endpoint para o usuário atual
router.post('/current',validadeToken, currentUserInfo);

module.exports = router;

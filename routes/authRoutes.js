const express = require('express');
const router = express.Router();

// Define o endpoint para registro
router.post('/register', (req, res) => {
    res.json({ message: 'Register route' });
});

// Define o endpoint para login
router.post('/login', (req, res) => {
    res.json({ message: 'Login route' });
});

// Define o endpoint para o usuário atual
router.post('/current', (req, res) => {
    res.json({ message: 'Current user route' });
});

module.exports = router;

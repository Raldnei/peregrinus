const express = require('express');
const router = express.Router();
const envioControle = require('../controllers/UsuarioControle');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email e senha são obrigatórios.' });
    }

    try {
        const usuario = await envioControle.buscarPorEmailESenha(email, password);
        if (usuario) {
            return res.status(200).json({ success: true, message: 'Login bem-sucedido.' });
        } else {
            return res.status(401).json({ success: false, message: 'Email ou senha incorretos.' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Erro ao tentar autenticar o usuário.' });
    }
});

module.exports = router;

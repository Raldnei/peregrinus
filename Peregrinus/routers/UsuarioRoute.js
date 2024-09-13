const express = require('express');
const routerEnvio = express.Router;
const router = routerEnvio();
const envioControle = require("../controllers/UsuarioControle");

// Rota para obter todos os usuários
router.get("/usuario", (req, res) => {
    const resposta = envioControle.buscar();
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message));
});

// Rota para obter um usuário específico por ID
router.get("/usuario/:id", (req, res) => {
    const id = req.params.id;
    const resposta = envioControle.buscarId(id);
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message));
});

// Rota para criar um novo usuário
router.post("/usuario", (req, res) => {
    const novoAtendimento = req.body;
    const resposta = envioControle.criar(novoAtendimento);
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message));
});

// Rota para atualizar um usuário existente
router.put("/usuario/:id", (req, res) => {
    const id = req.params.id;
    const envio = req.body;
    const resposta = envioControle.alterar(envio.login, envio.senha, id);
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json(error.message));
});

// Rota para deletar um usuário
router.delete("/usuario/:id", (req, res) => {
    const id = req.params.id;
    const resposta = envioControle.apagar(id);
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json(error.message));
});

// Rota para autenticação de login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Busca todos os usuários
        const usuarios = await envioControle.buscar(); // Obtém todos os usuários (não ideal para produção)

        // Verifica se o usuário existe e a senha está correta
        const usuario = usuarios.find(user => user.email === email && user.senha === password);

        if (usuario) {
            // Se encontrar, retorna sucesso
            res.json({ success: true });
        } else {
            // Caso contrário, retorna um erro
            res.json({ success: false, message: 'Email ou senha incorretos.' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Erro ao processar o login.' });
    }
});

module.exports = router;

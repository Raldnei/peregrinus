const express = require("express");
const routerProduto = express.Router();
const produtoControle = require("../controllers/ProdutoControle");

// Rota GET para carregar todos os produtos ou buscar com filtros
routerProduto.get('/produto', async (req, res) => {
    try {
        const filtros = {
            pesquisa: req.query.pesquisa,
            opcao: req.query.opcao,
            materiais: req.query.materiais ? req.query.materiais.split(',') : [],
            fantasias: req.query.fantasias ? req.query.fantasias.split(',') : [],
            armas: req.query.armas ? req.query.armas.split(',') : []
        };

        // Se filtros n達o s達o fornecidos, buscar todos os produtos
        const produtos = filtros.pesquisa || filtros.opcao || filtros.materiais.length > 0 || filtros.fantasias.length > 0 || filtros.armas.length > 0
            ? await produtoControle.buscarFiltrados(filtros)
            : await produtoControle.buscar();

        res.json(produtos);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar produtos", error });
    }
});

// Rota GET para buscar um produto por ID
routerProduto.get("/produto/:id", (req, res) => {
    const id = req.params.id;
    produtoControle.buscarId(id)
        .then(envio => {
            if (envio.length === 0) {
                return res.status(404).json({ message: "Produto n達o encontrado" });
            }
            res.status(200).json(envio[0]);
        })
        .catch(error => res.status(500).json({ message: "Erro ao buscar produto por ID", error }));
});

// Rota POST para criar um novo produto
routerProduto.post("/produto", (req, res) => {
    const novoProduto = req.body;
    produtoControle.criar(novoProduto)
        .then(envio => res.status(201).json(envio))
        .catch(error => res.status(400).json({ message: "Erro ao criar produto", error }));
});

// Rota PUT para atualizar um produto existente
routerProduto.put("/produto/:id", (req, res) => {
    const id = req.params.id;
    const produto = req.body;
    produtoControle.alterar(
        produto.nome,
        produto.foto,
        produto.descricao,
        produto.valor,
        produto.id_adm,
        produto.fantasia,
        produto.material,
        produto.arma,
        id
    )
    .then(envio => res.status(200).json(envio))
    .catch(error => res.status(400).json({ message: "Erro ao atualizar produto", error }));
});

// Rota DELETE para remover um produto por ID
routerProduto.delete("/produto/:id", (req, res) => {
    const id = req.params.id;
    produtoControle.apagar(id)
        .then(envio => {
            if (envio.affectedRows === 0) {
                return res.status(404).json({ message: "Produto n達o encontrado" });
            }
            res.status(200).json({ message: "Produto removido com sucesso" });
        })
        .catch(error => res.status(500).json({ message: "Erro ao apagar produto", error }));
});

module.exports = routerProduto;
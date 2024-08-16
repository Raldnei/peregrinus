const routerEnvio = require("express").Router;
const router = routerEnvio();
const produtoControle = require("../controllers/ProdutoControle");

router.get("/produto", (req,res)=>{
    const resposta = produtoControle.buscar();
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})

router.get("/produto/:codigo", (req,res)=>{
    const id = req.params.codigo;
    const resposta = produtoControle.buscarId(id);
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})

router.post("/produto",(req,res)=>{
    const novoProduto = req.body;

    const resposta = produtoControle.criar(novoProduto)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json
    (error.message))

})

router.put("/produto/:codigo",(req,res)=>{
    const id = req.params.codigo;
    const adm = req.body;
    
    const resposta = produtoControle.alterar(produto.nome,produto.descricao,produto.valor,produto.foto,produto.id_categoria,produto.id_estoque,id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

router.delete("/produto/:codigo",(req,res)=>{
    const id = req.params.codigo;
    const resposta = produtoControle.apagar(id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

module.exports = router;
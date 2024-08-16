const routerEnvio = require("express").Router;
const router = routerEnvio();
const estoqueControle = require("../controllers/EstoqueControle");

router.get("/estoque", (req,res)=>{
    const resposta = estoqueControle.buscar();
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})

router.get("/estoque/:id", (req,res)=>{
    const id = req.params.id;
    const resposta = estoqueControle.buscarId(id);
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})

router.post("/estoque",(req,res)=>{
    const novoEstoque = req.body;

    const resposta = estoqueControle.criar(novoEstoque)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json
    (error.message))

})

router.put("/estoque/:id",(req,res)=>{
    const id = req.params.id;
    const estoque = req.body;
    
    const resposta = estoqueControle.alterar(estoque.quant_produtos,estoque.id_adm,id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

router.delete("/estoque/:id",(req,res)=>{
    const id = req.params.id;
    const resposta = estoqueControle.apagar(id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

module.exports = router;
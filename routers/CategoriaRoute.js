const routerEnvio = require("express").Router;
const router = routerEnvio();
const categoriaControle = require("../controllers/CategoriaControle");

router.get("/categoria", (req,res)=>{
    const resposta = categoriaControle.buscar();
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})

router.get("/categoria/id", (req,res)=>{
    const id = req.params.id;
    const resposta = categoriaControle.buscarId(id);
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})


router.post("/categoria",(req,res)=>{
    const novaCategoria = req.body;

    const resposta = categoriaControle.criar(novaCategoria)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json
    (error.message))

})

router.put("/categoria/:id",(req,res)=>{
    const id = req.params.id;
    const envio = req.body;
    
    const resposta = categoriaControle.alterar(envio.status,envio.data_envio,envio.data_chegada_prevista,id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

router.delete("/categoria/:id",(req,res)=>{
    const id = req.params.id;
    const resposta = categoriaControle.apagar(id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

module.exports = router;
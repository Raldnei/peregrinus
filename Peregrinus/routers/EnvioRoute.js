const routerEnvio = require("express").Router;
const router = routerEnvio();
const envioControle = require("../controllers/EnvioControle");

router.get("/envio", (req,res)=>{
    const resposta = envioControle.buscar();
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})

router.get("/envio/:id", (req,res)=>{
    const id = req.params.id;
    const resposta = envioControle.buscarId(id);
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})

router.post("/envio",(req,res)=>{
    const novoAtendimento = req.body;

    const resposta = envioControle.criar(novoAtendimento)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json
    (error.message))

})

router.put("/envio/:id",(req,res)=>{
    const id = req.params.id;
    const envio = req.body;
    
    const resposta = envioControle.alterar(envio.status_envio,envio.data_envio,envio.data_chegada_prevista,id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

router.delete("/envio/:id",(req,res)=>{
    const id = req.params.id;
    const resposta = envioControle.apagar(id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

module.exports = router;
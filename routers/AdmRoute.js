const routerEnvio = require("express").Router;
const router = routerEnvio();
const admControle = require("../controllers/AdmControle");

router.get("/adm", (req,res)=>{
    const resposta = admControle.buscar();
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})

router.get("/adm/:id", (req,res)=>{
    const id = req.params.id;
    const resposta = admControle.buscarId(id);
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json(error.message))

})

router.post("/adm",(req,res)=>{
    const novoAdm = req.body;

    const resposta = admControle.criar(novoAdm)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(400).json
    (error.message))

})

router.put("/adm/:id",(req,res)=>{
    const id = req.params.id;
    const adm = req.body;
    
    const resposta = admControle.alterar(adm.login,adm.senha,id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

router.delete("/adm/:id",(req,res)=>{
    const id = req.params.id;
    const resposta = admControle.apagar(id)
    resposta.then(envio => res.status(200).json(envio)).catch(error => res.status(404).json
    (error.message))
})

module.exports = router;
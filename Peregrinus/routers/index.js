const rotaAtendimento = require("./atendimentoRoute")
module.exports= (app) =>{
    app.use(rotaAtendimento)

}
const atendimentoModel = require("../models/atendimentoModel")

class atendimentoControle{
    buscar(){
        return atendimentoModel.listar();
    }
    criar(novoAtendimento){
        return atendimentoModel.criar(novoAtendimento)
    }
    alterar(id){
        return "alterando o atendimento de número " + id;
    }
    apagar(id){
        return "apagando o atendimento de número "+id;
    }

}

module.exports = new atendimentoControle();
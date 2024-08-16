const db = require("../infraestrutura/conexao")
class CategoriaControle{
    buscar(){
        const sql = "SELECT * from categoria";
        return new Promise((resolve,reject)=>{
            db.query(sql,{},(error,resposta)=>{
                if(error){
                    console.log("Problema no get do envio");
                    reject(error)
                }
                console.log("Solicitação Get recebida")
                resolve(resposta)
            })
        })
    }

    buscarId(id){
        const sql = "SELECT * from categoria WHERE id=?";
        return new Promise((resolve,reject)=>{
            db.query(sql,[id],(error,resposta)=>{
                if(error){
                    console.log("Problema no get do envio");
                    reject(error)
                }
                console.log("Solicitação Get por id recebida")
                resolve(resposta)
            })
        })
    }

    criar(categoria){
        const sql = "INSERT INTO categoria (ferro,plástico,masculina,feminina,espada,faca,arco,clava,machado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        return new Promise((resolve,reject)=>{
            db.query(sql,[categoria.ferro, categoria.plástico,categoria.masculina,categoria.feminina,categoria.espada,categoria.faca,categoria.arco,categoria.clava,categoria.machado],(error,resposta)=>{
                if(error){
                    console.log("problema no post de envio");
                    reject(error)
                }
                console.log("solicitação post recebida")
                resolve(resposta)
            })
        })
    }

    alterar(ferro,plástico,masculina,feminina,espada,faca,arco,clava,machado, id){
        
        const sql = "UPDATE categoria SET ferro= ?, plástico=?,masculina=?, feminina=?,espada=?,faca=?,arco=?,clava=?,machado=? WHERE id = ?";
        return new Promise((resolve,reject)=>{
            db.query(sql,[ferro,plástico,masculina,feminina,espada,faca,arco,clava,machado,id],(error,resposta)=>{
                if(error){
                    console.log("Algum problema ocorreu");
                    reject(error)
                }
                console.log("100% zero bala mermo")
                resolve(resposta)
            })
        })
    }

    apagar(id){
        const sql = "Delete from categoria WHERE id = ?";
        return new Promise((resolve,reject)=>{
            db.query(sql,[id],(error,resposta)=>{
                if(error){
                    console.log("Algum problema ocorreu");
                    reject(error)
                }
                console.log("100% zero bala mermo")
                resolve(resposta)
            })
        })
    }


}

module.exports = new CategoriaControle();
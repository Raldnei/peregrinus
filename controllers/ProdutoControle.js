const db = require("../infraestrutura/conexao")
class ProdutoControle{
    buscar(){
        const sql = "SELECT * from produto";
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
        const sql = "SELECT * from produto WHERE codigo=?";
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

    criar(produto){
        const sql = "INSERT INTO produto (nome,descricao,valor,foto,id_categoria,id_estoque) VALUES (?, ?, ?,?,?,?)";
        return new Promise((resolve,reject)=>{
            db.query(sql,[produto.nome,produto.descricao,produto.valor,produto.foto,produto.id_categoria,produto.id_estoque],(error,resposta)=>{
                if(error){
                    console.log("problema no post de envio");
                    reject(error)
                }
                console.log("solicitação post recebida")
                resolve(resposta)
            })
        })
    }

    alterar(nome,descricao,valor,foto,id_categoria,id_estoque, codigo){
        
        const sql = "UPDATE produto SET nome= ?, descricao=?, valor=?,foto=?,id_categoria=?,id_estoque=?, WHERE codigo = ?";
        return new Promise((resolve,reject)=>{
            db.query(sql,[nome,descricao,valor,foto,id_categoria,id_estoque,codigo],(error,resposta)=>{
                if(error){
                    console.log("Algum problema ocorreu");
                    reject(error)
                }
                console.log("100% zero bala mermo")
                resolve(resposta)
            })
        })
    }

    apagar(codigo){
        const sql = "Delete from relatorio WHERE codigo = ?";
        return new Promise((resolve,reject)=>{
            db.query(sql,[codigo],(error,resposta)=>{
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

module.exports = new ProdutoControle();
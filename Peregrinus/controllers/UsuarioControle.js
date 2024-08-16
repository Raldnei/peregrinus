const db = require("../infraestrutura/conexao")
class UsuarioControle{
    buscar(){
        const sql = "SELECT * from usuario";
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
        const sql = "SELECT * from usuario where id=?";
        return new Promise((resolve,reject)=>{
            db.query(sql,[id],(error,resposta)=>{
                if(error){
                    console.log("Problema no get do envio");
                    reject(error)
                }
                console.log("Solicitação Get recebida"+id)
                resolve(resposta)
            })
        })
    }



  

    criar(usuario){
        const sql = "INSERT INTO usuario (login, senha, email, numero_cartao, cod_cartao, validade, nome_titular, cep, cidade, numero_casa, bairro, complemento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
        return new Promise((resolve,reject)=>{
            db.query(sql,[usuario.login,
                usuario.senha,
                usuario.email,
                usuario.numero_cartao,
                usuario.cod_cartao,
                usuario.validade,
                usuario.nome_titular,
                usuario.cep,
                usuario.cidade,
                usuario.numero_casa,
                usuario.bairro,
                usuario.complemento || null],(error,resposta)=>{
                if(error){
                    console.log("problema no post de envio");
                    reject(error)
                }
                console.log("solicitação post recebida")
                resolve(resposta)
            })
        })
    }

    alterar(login,senha,email,numero_cartao,cod_cartao,cartao,validade,nome_titular,cep,cidade,numero_casa,bairro,complemento, id){
        
        const sql = "UPDATE usuario SET login= ?, senha=?, email=?, numero_cartao=?, cod_cartao=?,cartao=?, validade=?,nome_titular=?,cep=?,cidade=?,numero_casa=?,bairro=?,complemento=? WHERE id = ?";
        return new Promise((resolve,reject)=>{
            db.query(sql,[login,senha,email,numero_cartao,cod_cartao,cartao,validade,nome_titular,cep,cidade,numero_casa,bairro,complemento,id],(error,resposta)=>{
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
        const sql = "Delete from usuario WHERE id = ?";
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

module.exports = new UsuarioControle();
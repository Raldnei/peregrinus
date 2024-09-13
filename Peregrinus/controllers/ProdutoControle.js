const db = require("../infraestrutura/conexao");

class ProdutoControle {
    buscar() {
        const sql = "SELECT * FROM Produto";
        return new Promise((resolve, reject) => {
            db.query(sql, (error, resposta) => {
                if (error) {
                    console.log("Problema no get de produto");
                    return reject(error);
                }
                console.log("Solicitação Get recebida");
                resolve(resposta);
            });
        });
    }

    buscarId(id) {
        const sql = "SELECT * FROM Produto WHERE id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id], (error, resposta) => {
                if (error) {
                    console.log("Problema no get de produto por ID");
                    return reject(error);
                }
                console.log("Solicitação Get por ID recebida");
                resolve(resposta);
            });
        });
    }

    criar(produto) {
        const sql = "INSERT INTO Produto (nome, foto, descricao, valor, id_adm, fantasia, material, arma) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        return new Promise((resolve, reject) => {
            db.query(sql, [produto.nome, produto.foto, produto.descricao, produto.valor, produto.id_adm, produto.fantasia, produto.material, produto.arma], (error, resposta) => {
                if (error) {
                    console.log("Problema no post de produto");
                    return reject(error);
                }
                console.log("Solicitação post recebida");
                resolve(resposta);
            });
        });
    }

    alterar(nome, foto, descricao, valor, id_adm, fantasia, material, arma, id) {
        const sql = "UPDATE Produto SET nome = ?, foto = ?, descricao = ?, valor = ?, id_adm = ?, fantasia = ?, material = ?, arma = ? WHERE id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [nome, foto, descricao, valor, id_adm, fantasia, material, arma, id], (error, resposta) => {
                if (error) {
                    console.log("Algum problema ocorreu ao atualizar o produto");
                    return reject(error);
                }
                console.log("Produto atualizado com sucesso");
                resolve(resposta);
            });
        });
    }

    apagar(id) {
        const sql = "DELETE FROM Produto WHERE id = ?";
        return new Promise((resolve, reject) => {
            db.query(sql, [id], (error, resposta) => {
                if (error) {
                    console.log("Algum problema ocorreu ao apagar o produto");
                    return reject(error);
                }
                console.log("Produto apagado com sucesso");
                resolve(resposta);
            });
        });
    }

    async buscarFiltrados(filtros) {
        let sql = "SELECT * FROM Produto WHERE 1=1";
        let params = [];
    
        // Adiciona filtro de pesquisa por nome
        if (filtros.pesquisa) {
            sql += " AND nome LIKE ?";
            params.push(`%${filtros.pesquisa}%`);
        }
    
        // Adiciona filtro de materiais
        if (filtros.materiais.length > 0) {
            sql += " AND material IN (" + filtros.materiais.map(() => '?').join(',') + ")";
            params.push(...filtros.materiais);
        }
    
        // Adiciona filtro de fantasias
        if (filtros.fantasias.length > 0) {
            sql += " AND fantasia IN (" + filtros.fantasias.map(() => '?').join(',') + ")";
            params.push(...filtros.fantasias);
        }
    
        // Adiciona filtro de armas
        if (filtros.armas.length > 0) {
            sql += " AND arma IN (" + filtros.armas.map(() => '?').join(',') + ")";
            params.push(...filtros.armas);
        }
    
        // Adiciona ordenação
        if (filtros.opcao) {
            switch (filtros.opcao) {
                case 'menor-preco':
                    sql += " ORDER BY valor ASC";
                    break;
                case 'maior-preco':
                    sql += " ORDER BY valor DESC";
                    break;
                case 'em-alta':
                    sql += " ORDER BY valor DESC"; // Ajustar conforme necessário
                    break;
                case 'a-z':
                    sql += " ORDER BY nome ASC";
                    break;
                case 'z-a':
                    sql += " ORDER BY nome DESC";
                    break;
                default:
                    break;
            }
        }
        console.log("SQL:", sql);
    console.log("Params:", params);
        // Retorna uma Promise com a execução da consulta
        return new Promise((resolve, reject) => {
            db.query(sql, params, (error, resposta) => {
                if (error) {
                    console.log("Problema ao buscar produtos filtrados:", error);
                    return reject(error);
                }
                resolve(resposta);
            });
        });
    }

}

module.exports = new ProdutoControle();
class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarTabelaAdm();
        this.criarTabelaMaterial();
        this.criarTabelaFantasia();
        this.criarTabelaArmas();
        this.criarTabelaCategoria();
        this.criarTabelaEnvio();
        this.criarTabelaUsuario();
        this.criarTabelaPagamento();
        this.criarTabelaProduto();
        this.criarTabelaCompras();
        this.criarTabelaPertence();
        this.criarTabelaInserido();
        this.criarPagamento('Pix', conexao);
        this.criarPagamento('Cartão de Crédito', conexao);
        this.criarPagamento('Boleto', conexao);
    }

    criarTabelaAdm() {
        const sql = `
            CREATE TABLE IF NOT EXISTS Adm (
                id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                login VARCHAR(40) NOT NULL,
                senha VARCHAR(20) NOT NULL
            );
        `;

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro na criação da tabela Adm: " + error.message);
                return;
            }
            console.log("Tabela Adm criada com sucesso");
        });
    }

    criarTabelaMaterial() {
        const sql = `
            CREATE TABLE IF NOT EXISTS Material (
                id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                metal VARCHAR(40) NOT NULL,
                plastico VARCHAR(40) NOT NULL,
                madeira VARCHAR(40) NOT NULL
            );
        `;

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro na criação da tabela Material: " + error.message);
                return;
            }
            console.log("Tabela Material criada com sucesso");
        });
    }

    criarTabelaFantasia() {
        const sql = `
            CREATE TABLE IF NOT EXISTS Fantasia (
                id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                genero VARCHAR(10) NOT NULL CHECK (genero IN ('masculina', 'feminina')),
                descricao VARCHAR(255) NOT NULL
            );
        `;

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro na criação da tabela Fantasia: " + error.message);
                return;
            }
            console.log("Tabela Fantasia criada com sucesso");
        });
    }

    criarTabelaArmas() {
        const sql = `
            CREATE TABLE IF NOT EXISTS Armas (
                id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                tipo_arma VARCHAR(10) NOT NULL CHECK (tipo_arma IN ('espada', 'faca', 'arco', 'machado', 'clava')),
                descricao VARCHAR(255) NOT NULL
            );
        `;

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro na criação da tabela Armas: " + error.message);
                return;
            }
            console.log("Tabela Armas criada com sucesso");
        });
    }

    criarTabelaCategoria() {
        const sql = `
            CREATE TABLE IF NOT EXISTS Categoria (
                id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                id_material INT NULL,
                id_fantasia INT NULL,
                id_armas INT NULL,
                FOREIGN KEY (id_material) REFERENCES Material(id),
                FOREIGN KEY (id_fantasia) REFERENCES Fantasia(id),
                FOREIGN KEY (id_armas) REFERENCES Armas(id)
            );
        `;

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro na criação da tabela Categoria: " + error.message);
                return;
            }
            console.log("Tabela Categoria criada com sucesso");
        });
    }

    criarTabelaEnvio() {
        const sql = `
            CREATE TABLE IF NOT EXISTS Envio (
                id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                status_envio BOOLEAN NOT NULL,
                data_envio DATE NOT NULL,
                data_chegada_prevista DATE NOT NULL
            );
        `;

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro na criação da tabela Envio: " + error.message);
                return;
            }
            console.log("Tabela Envio criada com sucesso");
        });
    }

    criarTabelaUsuario() {
        const sql = `
            CREATE TABLE IF NOT EXISTS Usuario (
                id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                login VARCHAR(20) NOT NULL,
                senha VARCHAR(20) NOT NULL,
                nome VARCHAR(40) NOT NULL,
                cpf VARCHAR(11) UNIQUE NOT NULL,
                email VARCHAR(40) NOT NULL,
                logradouro VARCHAR(40) NOT NULL,
                numero INT NULL,
                bairro VARCHAR(40) NOT NULL,
                cidade VARCHAR(40) NOT NULL,
                complemento VARCHAR(40) NULL,
                num_cartao VARCHAR(40) NULL,
                validade DATE NULL,
                titular VARCHAR(40)  NULL,
                cod_sec INT UNIQUE NULL
            );
        `;

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro na criação da tabela Usuario: " + error.message);
                return;
            }
            console.log("Tabela Usuario criada com sucesso");
        });
    }

    criarTabelaPagamento() {
        const sql = `
            CREATE TABLE IF NOT EXISTS Pagamento (
                id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                descricao VARCHAR(40) NOT NULL
            );
        `;

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro na criação da tabela Pagamento: " + error.message);
                return;
            }
            console.log("Tabela Pagamento criada com sucesso");
        });
    }

    criarTabelaProduto() {
        const sql = `
            CREATE TABLE IF NOT EXISTS Produto (
                id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                nome VARCHAR(40) NOT NULL,
                foto MEDIUMTEXT NULL,
                descricao VARCHAR(80) NULL,
                valor FLOAT NOT NULL,
                id_adm INT NOT NULL,
                fantasia varchar(40) null,
                material varchar(40) null,
                arma varchar(40) null,
                FOREIGN KEY (id_adm) REFERENCES adm(id)
            );
        `;

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro na criação da tabela Produto: " + error.message);
                return;
            }
            console.log("Tabela Produto criada com sucesso");
        });
    }

    criarTabelaCompras() {
        const sql = `
            CREATE TABLE IF NOT EXISTS Compras (
                id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                valor_total FLOAT NOT NULL,
                quant_itens INT NOT NULL,
                data_venda DATE NOT NULL,
                forma_pagamento VARCHAR(40) NOT NULL,
                id_envio INT NOT NULL,
                id_usuario INT NOT NULL,
                id_pagamento INT NOT NULL,
                FOREIGN KEY (id_envio) REFERENCES Envio(id),
                FOREIGN KEY (id_usuario) REFERENCES Usuario(id),
                FOREIGN KEY (id_pagamento) REFERENCES Pagamento(id)
            );
        `;

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro na criação da tabela Compras: " + error.message);
                return;
            }
            console.log("Tabela Compras criada com sucesso");
        });
    }

    criarTabelaPertence() {
        const sql = `
            CREATE TABLE IF NOT EXISTS Pertence (
                id_produto INT NOT NULL,
                id_categoria INT NOT NULL,
                PRIMARY KEY (id_produto, id_categoria),
                FOREIGN KEY (id_produto) REFERENCES Produto(id),
                FOREIGN KEY (id_categoria) REFERENCES Categoria(id)
            );
        `;

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro na criação da tabela Pertence: " + error.message);
                return;
            }
            console.log("Tabela Pertence criada com sucesso");
        });
    }

    criarTabelaInserido() {
        const sql = `
            CREATE TABLE IF NOT EXISTS Inserido (
                id_compra INT NOT NULL,
                id_produto INT NOT NULL,
                PRIMARY KEY (id_compra, id_produto),
                FOREIGN KEY (id_compra) REFERENCES Compras(id),
                FOREIGN KEY (id_produto) REFERENCES Produto(id)
            );
        `;

        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro na criação da tabela Inserido: " + error.message);
                return;
            }
            console.log("Tabela Inserido criada com sucesso");
        });
    }

    criarPagamento(pagamento, db) {
        return new Promise((resolve, reject) => {
            db.query("SELECT COUNT(*) AS count FROM Pagamento WHERE descricao = ?", [pagamento], (error, resultados) => {
                if (error) {
                    console.error("Erro ao verificar pagamento:", error);
                    return reject(error);
                }

                if (resultados[0].count > 0) {
                    return resolve(true);
                }

                db.query("INSERT INTO Pagamento (descricao) VALUES (?)", [pagamento], (error) => {
                    if (error) {
                        console.error("Erro ao inserir pagamento:", error);
                        return reject(error);
                    }

                    console.log("Pagamento inserido com sucesso.");
                    resolve(true); // Novo pagamento foi inserido
                });
            });
        });
    }
}

module.exports = new Tabelas();
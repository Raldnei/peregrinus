class Tabelas{
    init(conexao){
        this.conexao = conexao;
        this.criarTabelaAtendimentos();
        this.criarTabelaEnvio();
        this.criarTabelaCategoria();
        this.criarTabelaAdm();
        this.criarTabelaUsuario();
        this.criarTabelaEstoque();
        this.criarTabelaRelatorio();
        this.criarTabelaProduto();
        this.criarTabelaCompras();
        this.criarTabelaRealizar()

    }
    criarTabelaAtendimentos(){
        const sql = "create table if not exists atendimentos(id integer auto_increment primary key not null,nome varchar(255),idade integer, casado boolean);";

   
    this.conexao.query(sql, (error)=>{
        if(error){
            console.log("DEU ERRO MEU NOBRE"+ error.message)
            return;
        }
        console.log("Aplicação do pai é zero bala")
    });

    }

    criarTabelaEnvio(){
        const sql ="create table if not exists envio(id integer primary key not null,status varchar(20) not null,data_envio date not null,data_chegada_prevista date not null);"

        this.conexao.query(sql, (error)=>{
            if(error){
                console.log("erro na table envio"+ error.message)
                return;
            }
            console.log("Criada table Envio com sucesso")
        });

    }

    criarTabelaCategoria(){
        const sql = "create table if not exists categoria(id integer primary key not null,ferro varchar(40) not null,madeira varchar(40) not null,plástico varchar(40) not null, masculina varchar(40) not null, feminina varchar(40) not null,espada varchar(40) not null,faca varchar(40) not null,arco varchar(40) not null,clava varchar(40) not null,machado varchar(40) not null);"


        this.conexao.query(sql, (error)=>{
            if(error){
                console.log("erro na table categoria"+ error.message)
                return;
            }
            console.log("Criada table categoria com sucesso")
        });
    }

    criarTabelaAdm(){
        const sql="create table if not exists adm(id integer primary key not null,login varchar(40) not null,senha varchar(20) not null);"
        this.conexao.query(sql, (error)=>{
            if(error){
                console.log("erro na table Adm"+ error.message)
                return;
            }
            console.log("Criada table Adm com sucesso")
        });
    }

    criarTabelaUsuario(){
        const sql = "create table if not exists usuario(id integer primary key not null AUTO_INCREMENT,login varchar(40) not null,senha varchar(20) not null,email varchar(40) not null,numero_cartao varchar(40) not null,cod_cartao integer not null,validade date not null,nome_titular varchar(40) not null,cep varchar(20) not null,cidade varchar(40) not null,numero_casa integer not null,bairro varchar(40) not null,complemento varchar(40) null);"

        this.conexao.query(sql, (error)=>{
            if(error){
                console.log("erro na table Usuario"+ error.message)
                return;
            }
            console.log("Criada table Usuario com sucesso")
        });
    }

    criarTabelaEstoque(){
        const sql="create table if not exists estoque(id integer primary key not null,quant_produtos integer not null,id_adm integer not null,foreign key(id_adm) references adm(id));"
        this.conexao.query(sql, (error)=>{
            if(error){
                console.log("erro na table Estoque"+ error.message)
                return;
            }
            console.log("Criada table Estoque com sucesso")
        });

    }

    criarTabelaRelatorio(){
        const sql="create table if not exists relatorio(id integer primary key not null,produtos_comprados integer not null,produtos_restantes integer not null,id_estoque integer not null,foreign key (id_estoque) references estoque(id));"
        this.conexao.query(sql, (error)=>{
            if(error){
                console.log("erro na table Relatorio"+ error.message)
                return;
            }
            console.log("Criada table Relatorio com sucesso")
        });
    }

    criarTabelaProduto(){
        const sql="create table if not exists produto(codigo integer primary key not null,nome varchar(40) not null,descricao varchar(40) null,valor float not null,foto longblob not null,id_categoria integer not null,id_estoque integer not null,foreign key (id_categoria) references categoria(id),foreign key (id_estoque) references estoque(id));"

        this.conexao.query(sql, (error)=>{
            if(error){
                console.log("erro na table Produto"+ error.message)
                return;
            }
            console.log("Criada table Produto com sucesso")
        });
    }

    criarTabelaCompras(){
        const sql="create table if not exists compras(id integer primary key not null,valor_total float not null,quant_de_itens integer not null,pagamento varchar(20) not null,data_vendida date not null,status_carrinho boolean not null,id_usuario integer not null,id_envio integer not null,id_relatorio integer not null,foreign key (id_usuario) references usuario(id),foreign key (id_envio) references envio(id),foreign key (id_relatorio) references relatorio(id));"

        this.conexao.query(sql, (error)=>{
            if(error){
                console.log("erro na table Compras"+ error.message)
                return;
            }
            console.log("Criada table Compras com sucesso")
        });
    }

    criarTabelaRealizar(){
        const sql="create table if not exists realizar(id_compra integer not null,id_produto integer not null,primary key(id_compra,id_produto),foreign key (id_compra) references compras(id),foreign key (id_produto) references produto(codigo));"

        this.conexao.query(sql, (error)=>{
            if(error){
                console.log("erro na table realizar"+ error.message)
                return;
            }
            console.log("Criada table realizar com sucesso")
        });

    }


}

module.exports = new Tabelas();
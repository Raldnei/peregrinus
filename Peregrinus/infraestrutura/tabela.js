class Tabelas{
    init(conexao){
        this.conexao = conexao;
        this.criarTabelaAtendimentos();
    }
    criarTabelaAtendimentos(){
        const sql = "create table if not exists atendimentos(id integer auto_increment primary key not null,nome varchar(255),idade integer, casado boolean);";

   
    this.conexao.query(sql, (error)=>{
        if(error){
            console.log("DEU ERRO MEU NOBRE"+ error.message())
            return;
        }
        console.log("Aplicação do pai é zero bala")
    });

    }
}

module.exports = new Tabelas();
// import db_connection from '../database/db_connection'
let descricao
let valor
let categoria
let detalhe;
let data;

export default class Transacao {

  constructor(descricao, categoria, detalhe, data, valor){
    this.descricao = descricao, 
    this.categoria = categoria, 
    this.detalhe   = detalhe, 
    this.data      = data, 
    this.valor     = valor
  }
  
  metodoPadrao = () => {
    console.log(Ola)
  }

  retornaString = (nome) => {
    let string = `a string retornada terá o valor ${nome} atribuido`
    return string
  }

}


/*
const criarTabela = () => {
    const con = db_connection.con
    const query = 'CREATE TABLE IF NOT EXISTS transacao (descricao VARCHAR(255), categoria VARCHAR(255), detalhe VARCHAR(255), data DATE, valor DOUBLE)';

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query(query, function (err, result) {
          if (err) throw err;
          console.log("Table created");
        });
      });
}
*/
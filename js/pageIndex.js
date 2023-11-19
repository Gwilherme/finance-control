// "use strict";

const Transacao = {
    id        : "",
    descricao : "",
    categoria : "",
    detalhe   : "",
    data      : "",
    valor     : ""
}

// variaveis globais
const tabela = [];


// função para salvar 
const save = () => {
    let descricao = document.getElementById("descricao").value;
    let categoria = document.getElementById("categoria").value;
    let detalhe   = document.getElementById("detalhe").value;
    let data      = document.getElementById("data").value;
    let valor     = document.getElementById("valor").value;
    
    // const transacao = new Transacao(
    //   descricao, 
    //   categoria, 
    //   detalhe, 
    //   data, 
    //   valor
    // )
    Transacao.descricao = descricao
    Transacao.categoria = categoria
    Transacao.detalhe = detalhe
    Transacao.data = data
    Transacao.valor = valor

    armazenarDados(Transacao)

    window.location.reload(true)
}

const armazenarDados = (Transacao) => {
  const json = localStorage.getItem('transacaoList')

  // traz um json de lista
  let listaDeTransacoes = new Array()
  listaDeTransacoes = JSON.parse(json)

  // pegar a lista e adicionar o novo valor
  if(listaDeTransacoes == null){
    listaDeTransacoes = new Array()
  }
  listaDeTransacoes.push(Transacao)

  // com a lista atualizada, salvar no json existente e atualizar
  localStorage.setItem('transacaoList', JSON.stringify(listaDeTransacoes));

}

function maskCurrency(valor) {
  valor.mask('R$ 0.00', { reverse: true });
}

// function loadDoc() {
//     // var toggleMsg = document.getElementById("toggleMsg");
//     var paginaB = document.getElementById("paginaB");
//     var blobB = new Blob([paginaB.innerHTML], { type: paginaB.type });
//     var urlB = URL.createObjectURL(blobB);

//     //abriando o pop-up com a pagina B e acessando o seu elemento.
//     var windowB = window.open(urlB);
//     // toggleMsg.addEventListener("click", function (event) {
//     var mensagem = windowB.document.getElementById("mensagem");
//     mensagem.classList.toggle("invisivel");
//     // });
//   }




// fazer download do arquivo com os dados
  /*
// Função para criar e salvar o arquivo JSON
    function salvarJSONLocalmente() {
      const blob = new Blob([jsonString], { type: 'application/json' });
      saveAs(blob, 'exemplo.json'); // Isso irá mostrar uma caixa de diálogo de download para salvar o arquivo
    }

  */
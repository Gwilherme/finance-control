"use strict";

// tela de tabela
const carregaTabela = () =>{
    var json = localStorage.getItem('transacaoList')
    const list = JSON.parse(json)
    
    document.addEventListener('DOMContentLoaded', function() {
        for(let linha of list){
            addToTable(linha)
        }
    });
      
} 


// metodos
const addToTable = (Transacao) => {
    let tabela = document.getElementById("tabela")
    let data = new Date(Transacao.data)
    let dataString = `${data.getDay()}/${data.getMonth()}/${data.getFullYear()}`
    
    tabela.innerHTML += 
    `<tr id="linha">
        <td>${Transacao.descricao}</td>
        <td>${Transacao.categoria}</td> 
        <td>${Transacao.detalhe}</td> 
        <td>${dataString}</td> 
        <td>R$<span class="currency">${parseFloat(Transacao.valor)}</span></td>
        <td><span class='trash' style=''>&#128465;</span></td>
    </tr>`




    // descricaoTable.innerHTML += `<tr><td>${Transacao.descricao}</td> <br/>`
    // categoriaTable.innerHTML += `<td>${Transacao.categoria}</td> <br/>`
    // detalheTable.innerHTML   += `<td>${Transacao.detalhe}</td> <br/>`
    // dataTable.innerHTML      += `<td>${Transacao.data}</td> <br/>`
    // valorTable.innerHTML     += `<td>${Transacao.valor}</td>`
    

}

function salvarJSONLocalmente() {
    const jsonString = localStorage.getItem('transacaoList')
    const blob = new Blob([jsonString], { type: 'application/json' });
    saveAs(blob, 'exemplo.json'); // Isso irá mostrar uma caixa de diálogo de download para salvar o arquivo
}

carregaTabela()
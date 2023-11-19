"use strict";

const lerArquivo = () => {
    const fileInput = document.getElementById('fileInput');
    const resultado = document.getElementById('resultado');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const fileContents = e.target.result;
            const jsonData = JSON.parse(fileContents);
            // Manipule os dados JSON aqui
            console.log(jsonData);
            for(let transacao of jsonData){
                addToTable(transacao)
            }
        };

      reader.readAsText(file);
    } else {
      console.error('Nenhum arquivo selecionado.');
    }
}

const addToTable = (Transacao) => {
    let tabela = document.getElementById("tabela")
    
    tabela.innerHTML += 
    `<tr id="linha">
        <td>${Transacao.descricao}</td>
        <td>${Transacao.categoria}</td> 
        <td>${Transacao.detalhe}</td> 
        <td>${Transacao.data}</td> 
        <td>${Transacao.valor}</td>
    </tr>`
}
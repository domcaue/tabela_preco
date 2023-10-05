function construirTabela(){
    let tabela = document.querySelector("#tabela tbody");
    let produto = document.querySelector("#produto").value;
    
    tabela.innerHTML = "";

    for (let loja = 1; loja <= 10; loja++){
        let preco = Math.ceil(Math.random()*(100-50) + 50);

        let conteudo = `<td> Loja 0${loja} </td>
                        <td>${produto} </td>
                        <td> R$  ${preco.toFixed(2).replace('.',',')} </td>`;
        let tr = document.createElement("tr");
       tr.innerHTML=conteudo;
        tabela.append(tr);
    }
}

document.querySelector(".btn").addEventListener('click', construirTabela);

// let inputText = document.querySelector('input')
//     inputText.addEventListener('keypress', function(e){
//     construirTabela()
// })
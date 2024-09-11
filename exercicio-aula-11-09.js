function verObj(){
    let obj = {numeros: [1, 3, 7, 9, -1, 0, 4],
        qt:7
    }

    return obj;
}

function tabela(){

    let obj = verObj();

    let tableNum  = document.createElement('div.tabelaNum');
    // tableNum.style.backgroundColor = 'pink';
    // tableNum.style.display = 'flex';
    let linhas = document.createElement('div.linhas');
    let quantidade = document.createElement('div.quantidade');
    let soma = document.createElement('div.soma');
    let somaNum = 0;

    tableNum.innerHTML = 'Números: ';
    quantidade.innerHTML = "Quantidade: " + obj.numeros.length + "<br>";
    

    for(let i = 0; i < obj.numeros.length; i++){
        linhas.innerHTML += obj.numeros[i] +'<br>'; 
        
        somaNum += obj.numeros[i]; 
        
    }
    
    soma.innerHTML = 'Soma: ' + somaNum;


    tableNum.appendChild(linhas);
    tableNum.appendChild(quantidade);
    tableNum.appendChild(soma);

    document.body.appendChild(tableNum);


}

tabela();
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = 4;

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

console.log(busca(valor));

function busca (valor) {
    let valorEncontrado = false;
    let indice = 0;
    for (i=0; i < elementos.length; i++) {
        if (valor === elementos[i]) {
            valorEncontrado = true;
            indice = i;
        }
    }

    if (valorEncontrado) {
        return(`Achei ${valor} na posicao ${indice}`);
    }
    else {
        return(`Numero ${valor} nao encontrado!`)
    }
}
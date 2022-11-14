// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.
// - ".split(''): transforma a entrada em um array separado por aspas simples

let arr = [6,4,3,8,5]; //let arr = gets().split(''); 

let arrVazio = []; 

// TODO: crie a condição necessária para que o array fique ordenado como o exercício pede

arr.forEach(verificarPar);

function verificarPar(item) {
    if ((item % 2) === 0) {arrVazio.unshift(item)}
    else {arrVazio.push(item)}
}
console.log(arrVazio);
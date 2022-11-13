// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

var a = 3;
var N = 18;
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

let soma = 0;
let multiplo = a;

for(let i = 1; multiplo < N; i++){
    multiplo = a * i; 
    soma += multiplo;
}

console.log(soma);
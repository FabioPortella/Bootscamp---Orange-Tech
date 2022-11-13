// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let resultado = 2;
console.log(fizzBuzz(resultado));

//Você receberá um número onde: 
//Se o número for um múltiplo de 3 e 5 -> "FizzBuzz" ; 
//Se o número for apenas múltiplo de 3 -> "Fizz" ; 
//Se o número for apenas múltiplo de 5 -> "Buzz"; 
//Se o número não for um múltiplo de 3 ou 5, o número deve ser exibido; 
//TODO: Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme o enunciado.

function fizzBuzz(numero) {
    if ((numero % 3 === 0) & (numero % 5 === 0)) {
        return("FizzBuzz");
    }
    else if (numero % 3 === 0) {
        return("Fizz");
    }
    else if (numero % 5 === 0) {
        return("Buzz");
    }
    else {
        return(numero);
    }
}
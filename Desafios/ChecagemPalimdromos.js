// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let entrada = "rjsvo";
console.log(checaPalindromo(entrada));

//TODO:Retorne TRUE ou FALSE, caso a "palavra" seja ou não um Palíndromo.

function checaPalindromo(palavra){
    let palimdromo = "";
    for (i=palavra.length; i>=0 ;i--){
      palimdromo += palavra.charAt(i);
    }
    
    if(palavra===palimdromo){
      return "TRUE";
    }else{
      return "FALSE";
    }
  }
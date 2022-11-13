
/* 
Descrição: Neste desafio, receba um número inteiro N, 
calcule e imprima o somatório de todos os números de N até 0.   

Entrada: A Entrada será composta por um número inteiro, N. 

Saída: Será  impresso o somatório de N até 0, como no exemplo a baixo: 

  EXEMPLO DE ENTRADA      EXEMPLO DE SAÍDA
        10 	                55
        4 	                10
        15 	                120
*/

let n = 15;    //let n = parseInt(gets());
let soma = n;

somatorio(n);

// Implemente um método que calcule o somatório de um número usando recursividade:

function somatorio(n){
    if (n <= 0) {
        console.log(soma);
        return;
    }
    else {
        soma = soma + (n - 1);
        somatorio(n - 1);
    }
}
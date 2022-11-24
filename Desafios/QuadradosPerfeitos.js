/*
Dado um inteiro n, retorne o menor número de números quadrados perfeitos cuja soma seja n.
Um quadrado perfeito é um inteiro que é o quadrado de um inteiro; em outras palavras, 
é o produto de algum inteiro consigo mesmo. Por exemplo, 1, 4, 9 e 16 são quadrados perfeitos, 
enquanto 3 e 11 não são. 

Entrada: A entrada consiste em um número inteiro n, representando o valor total. 
Saída: A saída consiste em retornar o menor número de números quadrados perfeitos. 

EXEMPLO DE ENTRADA    EXEMPLO DE SAÍDA
	    12                  3
        13                  2
        10                  2
 
*/

//let lines = gets().split("\n");
let n = 12; //parseInt(lines.shift()); 

let quadradosExistentes = [];
for (let i = n; i >0; i --) {
    if (Number.isInteger(Math.sqrt(i))) {
        quadradosExistentes.push(i);
    }
}
quadradosExistentes.unshift(0);

console.log(quadradosExistentes);

let contador = 0;
let quantidadeQuadrados = 0;
while (true) {
    const resultado = conversao_bases(contador);
    if (eval(resultado) == n) {
        const arrResultado = resultado.split("+");
        for (let i = 0; i < arrResultado.length; i++) {
            if (arrResultado[1] != "0") quantidadeQuadrados++;
        }
        console.log(quantidadeQuadrados);
        //print(quantidadeQuadrados);
        break;
    }
    contador++;
}

function conversao_bases(numero) {
    let resultado = '';
    const base = quadradosExistentes.length;
    while (numero >= base) {
        const resto = numero % base;
        resultado += quadradosExistentes[resto];
        const divisao = numero / base;
        numero = Math.floor(divisao);
    }
    resultado += quadradosExistentes[numero];
    const resultadoFinal = resultado.split('').join('+');
    return resultadoFinal;
}
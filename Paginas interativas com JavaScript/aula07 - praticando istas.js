// imprime somente os números pares de uma lista

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numero = 0

for (let i = 0; i < numeros.length; i++) {
    numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(numero);
    }
}
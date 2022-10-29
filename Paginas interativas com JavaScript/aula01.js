//Faça um programa para calcular o valor de uma viagem.
//
//Você terá 3 variáveis. Sendo elas:
// 1 - Preço do combustível;
// 2 - Gasto médio de combustível do carro por KM;
// 3 - Distância em KM da viagem;
//
//Imprima no console o valor que será gasto para realizar esta viagem.

const precoGasolina = 5.09;
const precoAlcool   = 2.90;
const consumoGas    = 13;
const consumoAlcool = 9.2;
const distancia     = 399.6;
let custoViagem;

custoViagem = (distancia / consumoGas) * precoGasolina;
console.log(`Custo da viagem usando Gasolina: R\$${custoViagem.toFixed(2)}`);

custoViagem = (distancia / consumoAlcool) * precoAlcool;
console.log(`Custo da viagem usando Alcool: R\$${custoViagem.toFixed(2)}`);
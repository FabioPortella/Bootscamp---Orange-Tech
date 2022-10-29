//Faça um programa para calcular o valor de uma viagem.
//
//Você terá 5 variáveis. Sendo elas:
// 1 - Preço do etanol;
// 2 - Preço do gasolina;
// 3 - O tipo de combustível que está no seu carro;
// 4 - Gasto médio de combustível do carro por KM;
// 5 - Distância em KM da viagem;
//
//Imprima no console o valor que será gasto para realizar esta viagem.

const precoGas      =  5.09;        // Preço da gasolina
const precoEtanol   =  2.90;        // Preço do etanol
const consumoGas    =  13.0;        // Consumo do veículo com gasolina
const consumoEtanol =   9.2;        // Consumo do veículo com etanol
const combustivel   =     0;        // 0 para Gasolina e 1 para Etanol
const distancia     = 399.6;        // Distância em KM da viagem

let custoViagem;

if (combustivel === 0) {
    custoViagem = (distancia / consumoGas) * precoGas
    console.log(`Custo da viagem usando Gasolina: R\$${custoViagem.toFixed(2)}`);
} 
else {
    custoViagem = (distancia / consumoEtanol) * precoEtanol
    console.log(`Custo da viagem usando Etanol: R\$${custoViagem.toFixed(2)}`);
}
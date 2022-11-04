//   Crie uma classe para representar carros. 
//   Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
//   Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
//   gasto em reais para realizar este percurso.

class Carro {
    marca;
    cor;
    gastoMedioCombusivel;


    constructor(marca, cor, gastoMedioCombusivel){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombusivel = gastoMedioCombusivel;
    }


    calcularGastoDePercurso(distancia, precoCombustivel) {
        return distancia * this.gastoMedioCombusivel * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'preto', 1/12);
console.log(uno)
console.log(uno.calcularGastoDePercurso(100,5.00))
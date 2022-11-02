class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome}. Eu tenho ${this.idade} anos de idade.`);
    }
}


function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    }
    else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`);
    }
    else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade.`);
    }
}


const fabio = new Pessoa('Fábio', 52);
const jp = new Pessoa('JP', 9);

compararPessoas(fabio,jp);
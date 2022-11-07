const notas = [];
let soma = 0;
let media = 0;

notas.push(5);
notas.push(9);
notas.push(8);
notas.push(4);
notas.push(8);

for(let i = 0; i < notas.length; i++){
    soma += notas[i];
}

media = soma / notas.length;

console.log(media);
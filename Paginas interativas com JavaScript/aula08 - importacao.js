const { gets, print } = require('./funcoes-auxiliares');

const entradas = [ 5, 50 , 10, 98, 23 ];
let maiorNumEncontrado = 0;

for (i = 0; i < entradas.length; i++) {
    if (entradas[i] > maiorNumEncontrado) {
        maiorNumEncontrado = entradas[i];
    }
}
print(entradas)

print(maiorNumEncontrado);


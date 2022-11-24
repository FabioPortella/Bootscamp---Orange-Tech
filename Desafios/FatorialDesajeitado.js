//let lines = gets().split("\n"); 
let n = 10;  //parseInt(lines.shift()); 

if (n <= 2) { 
    console.log(n); //print(n);  
}
else console.log(fatorialDesajeitado(n));

function fatorialDesajeitado(numero) {

    let lista = [];
    let r = 0;

    for (let i = numero; i >= 1; i--) {
        lista.push(i);
    }

    if (lista.length >= 4) {
        r = Math.floor((lista[0] * lista[1]) / lista[2]);
        r = r + lista[3];
        lista.splice(0, 4);
        while (lista.length >= 4) {
            r = r - Math.floor((lista[0] * lista[1]) / lista[2]);
            r = r + lista[3];
            lista.splice(0, 4);
        }
        if (lista.length == 3) {
            r = r - Math.floor((lista[0] * lista[1]) / lista[2]);
            lista.splice(0, 2);
        } else if (lista.length == 2) {
            r = r - Math.floor(lista[0] * lista[1]);
            lista.splice(0, 2);
        } else if (lista.length == 1) {
            r = r - Math.floor(lista[0]);
            lista.splice(0, 2);
        }
    }

    return r;
}

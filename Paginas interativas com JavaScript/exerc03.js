//3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
//Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
//
//Código Condição de pagamento:
//1 - À vista Débito, recebe 10% de desconto;
//2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
//3 - Em duas vezes, preço normal de etiqueta sem juros;
//4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

const precoEtiqueta = 100.00;
const codPagamento = 4;
let precoVenda;


if (codPagamento === 1) {
    precoVenda = precoEtiqueta * 0.90;
    console.log(`À vista Débito - 10% de desconto: R\$${precoVenda.toFixed(2)}`)
}
else if (codPagamento === 2) {
    precoVenda = precoEtiqueta * 0.85;
    console.log(`À vista no Dinheiro ou PIX - 15% de desconto: R\$${precoVenda.toFixed(2)}`)
}
else if (codPagamento === 3) {
    precoVenda = precoEtiqueta;
    console.log(`Em duas vezes, preço normal de etiqueta sem juros: R\$${precoVenda.toFixed(2)}`)
}
else {
    precoVenda = precoEtiqueta * 1.10;
    console.log(`Acima de duas vezes, preço normal de etiqueta mais juros de 10%: R\$${precoVenda.toFixed(2)}`)
}

function escrevaSeuNome (nome) {
    return 'Seu nome é ' + nome;
}

function verificarMaioridade(idade) {
    if (idade < 18) {console.log(escrevaSeuNome("Fábio") + '. Você é menor de idade.');}
    else {console.log(escrevaSeuNome("Fábio") + '. Você é maior de idade.');} 
}

verificarMaioridade(52)
// ===== FUNÇÃO =====

function dividir(a, b) {

    // ===== CRIANDO UM ERRO MANUALMENTE =====

    if (b === 0) {
        throw "Não é possível dividir por zero.";
    } // throw = “Isso aqui deve ser considerado um erro.”

    return a / b;
}

// ===== TRATANDO O ERRO =====

try {

    const resultado = dividir(10, 0);

    console.log(resultado);

} catch (erro) {

    console.log("Erro:", erro);

}
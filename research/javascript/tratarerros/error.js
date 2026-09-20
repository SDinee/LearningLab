// ===== FUNÇÃO =====

function dividir(a, b) {

    if (b === 0) {

        // cria um objeto de erro
        throw new Error("Não é possível dividir por zero.");
    }

    return a / b;
}

// ===== TRATAMENTO =====

try {

    const resultado = dividir(10, 0);

    console.log(resultado);

} catch (erro) {

    console.log("Nome:", erro.name);
    console.log("Mensagem:", erro.message);

}
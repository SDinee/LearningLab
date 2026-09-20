// ===== FUNÇÃO SÍNCRONA =====
// Erro síncrono acontece durante a execução normal, linha por linha.
function calcularIdade(anoNascimento) {

    if (anoNascimento > 2026) {
        throw new Error("Ano de nascimento inválido.");
    }

    return 2026 - anoNascimento;
}

// ===== TRATAMENTO =====

try {

    const idade = calcularIdade(2030);

    console.log("Idade:", idade);

} catch (erro) {

    console.log("Erro:", erro.message);

}
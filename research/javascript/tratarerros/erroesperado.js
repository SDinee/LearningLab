// ===== FUNÇÃO =====

function sacar(saldo, valor) {

    // esse é um erro esperado
    // sabemos que alguém pode tentar sacar mais que possui
    if (valor > saldo) {
        throw new Error("Saldo insuficiente.");
    }
    return saldo - valor;
}

// ===== TRATAMENTO =====

try {
    const novoSaldo = sacar(100, 200);
    console.log(novoSaldo);

} catch (erro) {
    console.log("Operação recusada:", erro.message);
}
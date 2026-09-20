// ===== TRY / CATCH / FINALLY =====

try {

    const resultado = 10 / 2;

    console.log("Resultado:", resultado);

} catch (erro) {

    console.log("Erro:", erro.message);

} finally {

    // sempre executa
    console.log("Operação encerrada.");

}
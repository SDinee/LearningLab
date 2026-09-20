function dividir(a, b) {
    return new Promise((resolve, reject) => {
        if (b != 0) {
            resolve(a / b)
        } else {
            reject("Erro: não é possível dividir por zero.")
        }   
    });
}

dividir(10, 2)
    .then(resultado => {
        console.log(`Conta realizada com sucesso! Resultado: ${resultado}`);
    })
    .catch(erro => {
        console.log(erro)
    })
    .finally(() => {
        console.log("Calculadora encerrada.")
    });
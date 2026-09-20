// .finally() Que significa: “De qualquer jeito, faça isso no final.”

Promise.resolve("Pizza chegou")
    .then(resultado => {
        console.log(resultado);
    })
    .finally(() => {
        console.log("Pedido encerrado");
    });


Promise.reject("Erro na entrega")
    .catch(erro => {
        console.log(erro);
    })
    .finally(() => {
        console.log("Pedido encerrado");
    });
// Ou seja, você entrega para esperar() a função que deve ser executada depois.
function esperar(ms, callback) {
    setTimeout(callback, ms);
}

esperar(2000, () => {
    console.log("Terminou");
});
// "Aqui está a função que você deve executar quando terminar."



// versão promisse
function esperarPromise(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

esperarPromise(2000)
    .then(() => {
        console.log("Terminou");
    });

// "Me devolve uma Promise e eu decido depois o que fazer quando terminar."
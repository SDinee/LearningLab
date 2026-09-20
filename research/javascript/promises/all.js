// Promise.all() = eu preciso que TODAS deem certo.

const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");

Promise.all([p1, p2])
    .then(resultados => {
        console.log(resultados);
    });



// Exemplo mais visual:

const usuarios = new Promise(resolve => {
    setTimeout(() => resolve("Usuários carregados"), 1000);
});

const produtos = new Promise(resolve => {
    setTimeout(() => resolve("Produtos carregados"), 1000);
});

Promise.all([usuarios, produtos])
    .then(resultados => {
        console.log(resultados);
    });


// se 1 der erro
Promise.all([
    Promise.resolve("Usuários"),
    Promise.reject("Erro nos produtos")
])
    .then(console.log)
    .catch(console.log);
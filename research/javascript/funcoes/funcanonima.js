// Criamos uma função sem dar um nome para ela.
// Por isso ela é chamada de função anônima.
function() {
    console.log("Executou!");
}
// Sozinha, essa função não é muito útil, porque você não tem um nome para chamá-la depois.

// setTimeout recebe dois argumentos:
// 1º → uma função que será executada depois
// 2º → tempo de espera em milissegundos

setTimeout(function() {

    // Esta função será executada depois de 1 segundo.
    console.log("Executou!");

}, 1000);

// function() { ... } é uma função anônima, mas como foi passada como argumento para setTimeout, ela se torna call-back.


//Função nomeada como callback, podemos fazer a mesma coisa usando uma função com nome:
// Criamos uma função normalmente.
function mostrarMensagem() {
    console.log("Executou!");
}

// Passamos a função para o setTimeout.
// Não usamos () porque não queremos executar agora.
// Queremos que o setTimeout execute depois.
setTimeout(mostrarMensagem, 1000);


//Função anônima com arrow function, a mesma ideia pode ser escrita com arrow function:
// Criamos uma arrow function anônima.
// Ela será executada depois de 1 segundo.
setTimeout(() => {

    // Código que será executado.
    console.log("Executou!");

}, 1000);

// Arrow function anônima:

() => {
    console.log("Executou!");
}

// Callback com parâmetros
// Criamos uma função que recebe uma mensagem.
function mostrarMensagem(mensagem) {
    console.log(mensagem);
}

// setTimeout executará uma função depois de 1 segundo.
// A função anônima recebe o valor que queremos passar.
setTimeout(function() {

    // Chamamos a função passando uma mensagem.
    mostrarMensagem("Olá, Sidne!");

}, 1000);


// Callback + arrow function
// Espera 1 segundo e depois executa a arrow function.
setTimeout(() => {

    // Mostra a mensagem no console.
    console.log("Olá, Sidne!");

}, 1000);
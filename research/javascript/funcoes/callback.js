// A função "executar" recebe um parâmetro chamado "fn".
// Nesse caso, "fn" vai receber uma função.
function executar(fn) {

    // "fn" contém uma função.
    // Os () fazem essa função ser executada.
    console.log(fn());
}

// Passamos uma arrow function como argumento.
// Essa função será recebida pelo parâmetro "fn".
executar(() => "Sou um callback!");
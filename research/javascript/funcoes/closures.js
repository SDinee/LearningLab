// Uma função interna consegue lembrar e continuar usando variáveis que existiam no lugar onde ela foi criada.

function contador() {
    // Essa variável pertence à função contador
    let c = 0;

    // Retornamos uma função
    return () => c++;

    /*++c incrementa → retorna
    c++ retorna → incrementa*/
}

// Chamamos contador()
// Ele cria a variável c = 0
// e retorna a função
let inc = contador();

// A função lembra da variável c
console.log(inc());
// 1

// A mesma variável c continua existindo
console.log(inc());
// 2




function criarSaudacao() {
    let nome = "João";

    return function() {
        console.log(nome);
    };
}

let falar = criarSaudacao();

falar();
// João
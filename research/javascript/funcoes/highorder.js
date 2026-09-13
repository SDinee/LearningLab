let numeros = [1, 2, 3];

// map() recebe uma função como argumento, map() serve para percorrer um array e criar um novo array transformando cada elemento.
// Essa função será executada para cada elemento do array
let dobrados = numeros.map(n => n * 2);

console.log(dobrados);
// [2, 4, 6]




function executar(funcao) {
    // Recebe uma função como parâmetro
    return funcao();
}

// Criamos uma função
function saudacao() {
    return "Olá!";
}

// Passamos a função para outra função
let resultado = executar(saudacao);

console.log(resultado);
// Olá!

// executar() é uma Higher-Order Function, porque ela recebe outra função (saudacao) como argumento.





// A outra possibilidade de Higher-Order Function é retornar uma função:
function criarMultiplicador(numero) {

    // A função retorna outra função
    return function(valor) {
        return valor * numero;
    };
}

// multiplicarPor2 recebe uma função
let multiplicarPor2 = criarMultiplicador(2);

console.log(multiplicarPor2(5));
// 10

console.log(multiplicarPor2(10));
// 20
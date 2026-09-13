// A variável "falar" recebe uma função.
// A função não possui nome, por isso é anônima.
const falar = function() {

    // Retorna a string "Oi".
    return "Oi";
};

// Como "falar" guarda uma função,
// podemos executar essa função usando ().
console.log(falar()); // Oi


// A variável "falar2" recebe uma arrow function.
// A arrow function é uma forma mais curta de escrever funções anônimas.
const falar2 = () => "Oi";

console.log(falar2()); // Oi
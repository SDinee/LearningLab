// Cria uma função chamada "dobrar".
// Ela recebe um valor "x" e retorna esse valor multiplicado por 2.
const dobrar = x => x * 2;

// Cria uma função chamada "somarUm".
// Ela recebe um valor "x" e adiciona 1.
const somarUm = x => x + 1;

// Primeiro, "dobrar(5)" é executada.
// 5 * 2 = 10.
//
// Depois, o resultado 10 é passado para "somarUm".
// 10 + 1 = 11.
//
// Resultado final: 11.
console.log(somarUm(dobrar(5))); // 11

// Cada função recebe o resultado da anterior.
const dobrar2 = x => x * 2;
const somarUm2 = x => x + 1;
const quadruplicar = x => x * 4;

console.log(quadruplicar(somarUm2(dobrar2(5)))); // 44
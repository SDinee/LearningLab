let nomes = ["Carlos", "Ana", "Pedro"];

// Ordena em ordem alfabética
nomes.sort();

console.log(nomes);
// ["Ana", "Carlos", "Pedro"]

let numeros = [10, 2, 30];

numeros.sort();

console.log(numeros);
// [10, 2, 30] ← provavelmente não é o que você queria



/* Por padrão, sort() trata os valores como texto.

Para ordenar números corretamente:*/

let numeros1 = [10, 2, 30];

// a - b → menor para maior
numeros1.sort((a, b) => a - b);

console.log(numeros1);
// [2, 10, 30]

// Para maior → menor:
let numeros3 = [10, 2, 30];

numeros3.sort((a, b) => b - a);

console.log(numeros3);
// [30, 10, 2]
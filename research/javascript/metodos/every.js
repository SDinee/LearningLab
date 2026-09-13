// É parecido com some(), mas agora a condição precisa ser verdadeira para todos os elementos do array. Se algum elemento não atender a condição, o resultado será false.
let numeros = [2, 4, 6, 8];

// Todos os números são pares?
let todosPares = numeros.every(numero => numero % 2 === 0);

console.log(todosPares);
// true
let numeros = [1, 2, 3];

// Para cada número, multiplica por 2
let dobrados = numeros.map(numero => numero * 2);

console.log(dobrados);
// [2, 4, 6]

// O array original não foi alterado
console.log(numeros);
// [1, 2, 3]
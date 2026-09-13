let frutas = ["maçã", "banana", "uva", "abacaxi"];

// Procura a primeira fruta que começa com "b"
let resultado = frutas.find(fruta => fruta.startsWith("b"));

console.log(resultado);
// "banana"
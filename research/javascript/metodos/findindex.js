let frutas = ["maçã", "banana", "uva", "abacaxi"];

// Procura a posição da fruta "uva"
let indice = frutas.findIndex(fruta => fruta === "uva");

console.log(indice);
// 2

let nachar = frutas.findIndex(fruta => fruta === "laranja");

console.log(nachar);
// -1
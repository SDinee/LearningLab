// Ele retorna uma string indicando o tipo.
console.log(typeof "Olá");     // "string"
console.log(typeof 42);        // "number"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"  // (bug histórico da linguagem)
console.log(typeof [1, 2, 3]); // "object"  // arrays são objetos
console.log(typeof {nome: "Ana"}); // "object"
console.log(Array.isArray([1, 2, 3])); // true
console.log(typeof function() {}); // "function"

let dado = 123;

if (typeof dado === "string") {
  console.log("O valor é uma string!");
} else {
  console.log("O valor NÃO é uma string.");
}

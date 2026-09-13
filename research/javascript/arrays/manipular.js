// Array inicial
let frutas = ["maçã", "banana", "uva"];

console.log(frutas);
// ["maçã", "banana", "uva"]


// ========================================
// push()
// Adiciona um elemento no FINAL do array
// ========================================

frutas.push("laranja");

console.log(frutas);
// ["maçã", "banana", "uva", "laranja"]


// ========================================
// pop()
// Remove o ÚLTIMO elemento do array
// ========================================

frutas.pop();

console.log(frutas);
// ["maçã", "banana", "uva"]


// ========================================
// shift()
// Remove o PRIMEIRO elemento do array
// ========================================

frutas.shift();

console.log(frutas);
// ["banana", "uva"]


// ========================================
// unshift()
// Adiciona um elemento no INÍCIO do array
// ========================================

frutas.unshift("morango");

console.log(frutas);
// ["morango", "banana", "uva"]


// ========================================
// slice()
// Cria uma CÓPIA de uma parte do array
// Não altera o array original
// ========================================

let copia = frutas.slice(0, 2); // 0 → posição inicial, 2 → posição final (não inclusa)

console.log(copia);
// ["morango", "banana"]

console.log(frutas);
// ["morango", "banana", "uva"]
// O array original continua igual


// ========================================
// splice()
// Pode REMOVER e/ou ADICIONAR elementos
// Altera o array original
// ========================================

frutas.splice(1, 1, "abacaxi");

// 1º número → posição onde começa: 1
// 2º número → quantidade que será removida: 1
// 3º valor  → elemento que será adicionado: "abacaxi"

console.log(frutas);
// ["morango", "abacaxi", "uva"]


// ========================================
// includes()
// Verifica se um valor EXISTE no array
// Retorna true ou false
// ========================================

console.log(frutas.includes("uva"));
// true

console.log(frutas.includes("banana"));
// false


// ========================================
// indexOf()
// Procura um elemento e retorna sua posição
// Se não encontrar, retorna -1
// ========================================

console.log(frutas.indexOf("abacaxi"));
// 1

console.log(frutas.indexOf("banana"));
// -1
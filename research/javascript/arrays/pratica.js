let lista = []

lista.push("maçã")
lista.push("banana")
lista.push("uva")
lista.push("laranja")

console.log(lista) // ["maçã", "banana", "uva", "laranja"]

lista.pop()
lista.pop()

console.log(lista) // ["maçã", "banana"]    

lista.shift()
lista.unshift("morango")

console.log(lista) // ["morango", "banana"]

console.log(lista.slice(0, 2)) // 0 → posição inicial, 2 → posição final 

lista.splice(1, 1, "abacaxi") // 1 → posição inicial, 1 → quantidade de elementos a serem removidos, "abacaxi" → elemento a ser adicionado

console.log(lista) // ["morango", "abacaxi"]    

console.log(lista.includes("abacaxi"))   // true

console.log(lista.indexOf("abacaxi")) // 1
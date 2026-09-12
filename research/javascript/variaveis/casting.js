// Conversão explícita (quando você força a mudança)
let texto = "123";
let numero = Number(texto);   // converte string para number
console.log(numero);          // 123
console.log(typeof numero);   // "number"

let valor = 456;
let str = String(valor);      // converte number para string
console.log(str);             // "456"
console.log(typeof str);      // "string"

let bool = Boolean(0);        // converte number para boolean
console.log(bool);            // false


// Conversão implícita (quando o JavaScript faz sozinho)

console.log("5" + 2);   // "52"  → converte number para string
console.log("5" - 2);   // 3     → converte string para number
console.log(1 == "1");  // true  → converte string para number

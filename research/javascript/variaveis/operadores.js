// Aritméticos (contas matemáticas)
let soma = 5 + 3;   // 8
let sub = 5 - 3;    // 2
let mult = 5 * 3;   // 15
let div = 10 / 2;   // 5
let resto = 10 % 3; // 1

// Comparação (retornam true ou false)
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 == "5"); // true (compara valor, ignora tipo)
console.log(5 === "5"); // false (compara valor e tipo)

// Lógicos (trabalham com booleanos)
console.log(true && false); // false (AND)
console.log(true || false); // true  (OR)
console.log(!true);         // false (NOT)

// Atribuição
let x = 10;
x += 5; // equivalente a x = x + 5 → 15
x *= 2; // equivalente a x = x * 2 → 30


//?? (Nullish Coalescing)
// Esse operador serve para definir um valor padrão quando a variável é null ou undefined.
let nome = null;
let resultado = nome ?? "Sem nome";
console.log(resultado); // "Sem nome"

let valor = 0;
console.log(valor || 10); // 10  (porque 0 é considerado "falsy")
console.log(valor ?? 10); // 0   (porque 0 não é null/undefined)

//?. (Optional Chaining)
// Esse operador evita erro quando tentamos acessar uma propriedade que pode não existir.
let pessoa = { nome: "Ana" };
console.log(pessoa.endereco?.rua); // undefined (sem erro!)

let usuario = { perfil: null };
console.log(usuario.perfil?.nome ?? "Usuário desconhecido");
// "Usuário desconhecido"

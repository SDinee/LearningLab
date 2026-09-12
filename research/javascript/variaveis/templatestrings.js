// Interpolar variáveis dentro da string, quebrar linhas sem precisar de \n,criar strings mais legíveis.
let nome = "Ana";
let idade = 25;

let mensagem = `Meu nome é ${nome} e tenho ${idade} anos.`;
console.log(mensagem);
// "Meu nome é Ana e tenho 25 anos."

// Exemplo com expressão:
let a = 5;
let b = 3;

console.log(`A soma de ${a} + ${b} é ${a + b}`);
// "A soma de 5 + 3 é 8"

// Exemplo com múltiplas linhas:
let texto = `Linha 1
Linha 2
Linha 3`;

console.log(texto);

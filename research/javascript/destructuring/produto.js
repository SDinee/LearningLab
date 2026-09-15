const produto = {
    nome: "Mouse"
};

const { nome, preco = 100 } = produto;

console.log(nome);
console.log(preco);


const produto2 = {
    nome2: "Mouse",
    preco2: 150
};

// O valor padrão só entra se não existir valor (ou for undefined).
const { nome2, preco2 = 100 } = produto2;

console.log(preco2); //150
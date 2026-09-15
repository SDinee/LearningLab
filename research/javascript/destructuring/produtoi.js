const produto = {
    nome: "Mouse"
};

const { nome, preco = 100 } = produto;

console.log(nome);
console.log(preco);
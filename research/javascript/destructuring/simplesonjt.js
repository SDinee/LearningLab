const pessoa = {
    nome: "Sidne",
    idade: 21,
    cidade: "Rio de Janeiro"
};

// Pegando apenas o que interessa
const { nome, cidade } = pessoa;

console.log(nome);
console.log(cidade);
const usuario = {
    nome: "Sidne",
    idade: 21,
    cidade: "Rio de Janeiro",
    curso: "ADS",
    aula: "JavaScript"
};

const { nome, ...dados } = usuario;

console.log(nome);
console.log(dados);
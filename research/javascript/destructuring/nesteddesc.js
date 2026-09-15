const usuario = {
    nome: "Sidne",
    endereco: {
        cidade: "Rio de Janeiro",
        estado: "RJ"
    }
};

const {
    nome,
    endereco: { cidade, estado }
} = usuario;

console.log(nome);
console.log(cidade);
console.log(estado);
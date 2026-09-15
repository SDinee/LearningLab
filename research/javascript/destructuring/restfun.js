function mostrarPessoa({ nome, ...dados }) {
    console.log(`Nome: ${nome}`);
    console.log("Outros dados:", dados);
}

mostrarPessoa({
    nome: "Sidne",
    idade: 21,
    cidade: "Rio"
});
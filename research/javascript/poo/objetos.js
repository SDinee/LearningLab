const usuario = {
    nome: "Sidne",
    idade: 21,
    email: "sidne@email.com",

    // Método do objeto
    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    },

    // Outro método
    alterarEmail(novoEmail) {
        this.email = novoEmail;
    }
};

console.log(usuario.nome);
console.log(usuario.email);

console.log(usuario.apresentar());

usuario.alterarEmail("sidnenovo@email.com");

console.log(usuario.email);
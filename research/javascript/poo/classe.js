class Usuario {
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    apresentar() {
        return `Olá, sou ${this.nome} e tenho ${this.idade} anos.`;
    }
}

// Criando objetos usando a classe Usuario
const usuario1 = new Usuario("João", 20, "joao@email.com");
const usuario2 = new Usuario("Maria", 24, "maria@email.com");
const usuario3 = new Usuario("Pedro", 30, "pedro@email.com");

console.log(usuario1.apresentar());
console.log(usuario2.apresentar());
console.log(usuario3.apresentar());
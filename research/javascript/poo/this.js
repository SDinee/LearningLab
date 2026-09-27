class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        // "this" será o objeto que chamou apresentar()
        return `Meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

const pessoa1 = new Pessoa("Ana", 25);
const pessoa2 = new Pessoa("Lucas", 30);

console.log(pessoa1.apresentar());
// o this é pessoa1.

console.log(pessoa2.apresentar());
// this passa a representar pessoa2.
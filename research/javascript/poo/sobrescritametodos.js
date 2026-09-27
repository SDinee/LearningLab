// Sobrescrita acontece quando uma classe filha possui um método com o mesmo nome de um método da classe pai, mas cria sua própria implementação.
class Funcionario {
    constructor(nome) {
        this.nome = nome;
    }

    trabalhar() {
        return `${this.nome} está realizando suas atividades.`;
    }
}

class Desenvolvedor extends Funcionario {
    // Sobrescrevendo o método trabalhar()
    trabalhar() {
        return `${this.nome} está desenvolvendo uma aplicação.`;
    }
}
// Desenvolvedor fala: quando trabalhar() for chamado em mim, quero fazer diferente.

class Designer extends Funcionario {
    // Também sobrescrevendo trabalhar()
    trabalhar() {
        return `${this.nome} está criando o design da interface.`;
    }
}
// Designer fala: quando trabalhar() for chamado em mim, quero fazer diferente.

const funcionario = new Funcionario("Pedro");
const desenvolvedor = new Desenvolvedor("Sidne");
const designer = new Designer("Maria");

console.log(funcionario.trabalhar());
console.log(desenvolvedor.trabalhar());
console.log(designer.trabalhar());
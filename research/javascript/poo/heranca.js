// Herança permite criar uma classe baseada em outra.
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    trabalhar() {
        return `${this.nome} começou a trabalhar.`;
    }
}

// Desenvolvedor herda de Funcionario
class Desenvolvedor extends Funcionario {
    programar() {
        return `${this.nome} está programando em JavaScript.`;
    }
}

// Gerente também herda de Funcionario
class Gerente extends Funcionario {
    realizarReuniao() {
        return `${this.nome} está realizando uma reunião.`;
    }
}

const dev = new Desenvolvedor("Sidne", 5000);
const gerente = new Gerente("Ana", 7000);

// Método herdado de Funcionario
console.log(dev.trabalhar());

// Método específico de Desenvolvedor
console.log(dev.programar());

// Método herdado
console.log(gerente.trabalhar());

// Método específico de Gerente
console.log(gerente.realizarReuniao());
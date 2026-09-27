// Getters e setters permitem ler ou modificar uma propriedade utilizando regras.O get controla a leitura. O set controla a alteração.
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        // O _ não torna a propriedade privada. É apenas uma convenção que significa algo parecido com: essa propriedade é interna, evite acessá-la diretamente. 
        // Se quiser privacidade verdadeira, usamos #.
        this._salario = salario;
    }

    // Getter
    get salario() {
        return this._salario;
    }

    // Setter
    set salario(novoSalario) {
        if (novoSalario < 0) {
            console.log("O salário não pode ser negativo.");
            return;
        }

        this._salario = novoSalario;
    }
}

const funcionario = new Funcionario("Sidne", 2500);

// Usa automaticamente o getter
console.log(funcionario.salario);

// Usa automaticamente o setter
funcionario.salario = 3000;

console.log(funcionario.salario);

// O setter bloqueia esse valor
funcionario.salario = -1000;

console.log(funcionario.salario);
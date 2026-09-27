// Os dois são fundamentais para herança. extends, significa: esta classe herda daquela classe. 
// O super() permite chamar o constructor da classe pai. Isso é necessário principalmente quando a classe filha possui seu próprio constructor.
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `${this.nome} possui ${this.idade} anos.`;
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        // Chama o constructor de Animal
        // Animal vai cuidar de nome e idade
        super(nome, idade);

        // Propriedade específica de Cachorro
        this.raca = raca;
    }

    apresentar() {
        // super.apresentar() chama o método da classe pai
        const apresentacaoAnimal = super.apresentar();

        return `${apresentacaoAnimal} Raça: ${this.raca}.`;
    }

    latir() {
        return `${this.nome}: Au au!`;
    }
}

const cachorro = new Cachorro(
    "Thor",
    4,
    "Golden Retriever"
);

console.log(cachorro.apresentar());
console.log(cachorro.latir());
class Personagem {
    constructor(nome, vida, nivel) {
        // guarda os valores recebidos na propriedade do objeto
        this.nome = nome;
        this.vida = vida;
        this.nivel = nivel;
    }

    apresentar() {
        // this para acessar os dados do próprio personagem
        return `Meu nome é ${this.nome}, sou nível ${this.nivel} e tenho ${this.vida} de vida`;
    }

    receberDano(dano) {
        this.vida = this.vida - dano;

        console.log(`${this.nome} recebeu ${dano} de dano`);
    }
}


const personagem1 = new Personagem("Sidne", 100, 1);

console.log(personagem1.apresentar());

personagem1.receberDano(20);

console.log(personagem1.apresentar())
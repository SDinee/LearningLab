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
        
        console.log(`${this.nome} recebeu ${dano} de dano`)
        // vida -0 = 0
        if (this.vida <= 0) {
            this.vida = 0
            console.log(`${this.nome} Jogador perdeu! Sua vida zerou.`)
        };
    }

    atacar(alvo, dano) {
        if (this.vida <= 0) {
            console.log(`${this.nome} está derrotado, não pode atacar!`)

        } else if (alvo.vida > 0) {
            //quem atacou
            console.log(`${this.nome} atacou ${alvo.nome}`)

            //alvo recebe dano
            alvo.receberDano(dano)
        } else {
            console.log(`${alvo.nome} já está derrotado!`)
        }

    }
}


const personagem1 = new Personagem("Sidne", 150, 1);
const personagem2 = new Personagem("Chloe", 100, 1)

console.log(personagem1.apresentar());
console.log(personagem2.apresentar())

personagem1.atacar(personagem2, 100)

personagem1.atacar(personagem2, 100)

personagem1.atacar(personagem2, 100)

personagem1.atacar(personagem2, 100)
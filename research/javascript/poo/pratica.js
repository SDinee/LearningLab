class Personagem {
    #vida
    constructor(nome, vida, nivel) {
        // guarda os valores recebidos na propriedade do objeto
        this.nome = nome;
        this.#vida = vida;
        this.nivel = nivel;
    }

    apresentar() {
        // this para acessar os dados do próprio personagem
        return `Meu nome é ${this.nome}, sou nível ${this.nivel} e tenho ${this.#vida} de vida`;
    }

    receberDano(dano) {        
        if (this.#vida <= 0) {
            return;
        }
        this.#vida = this.#vida - dano;
        console.log(`${this.nome} recebeu ${dano} de dano`)
        if (this.#vida <= 0){
            this.#vida = 0;
            console.log(`${this.nome} Jogador perdeu! Sua vida zerou.`);           
        }
    }      
    

    atacar(alvo, dano) {
        if (this.#vida <= 0) {
            console.log(`${this.nome} está derrotado, não pode atacar!`);

        } else if (alvo.#vida > 0) {
            //quem atacou
            console.log(`${this.nome} atacou ${alvo.nome}`);

            //alvo recebe dano
            alvo.receberDano(dano);
        } else {
            console.log(`${alvo.nome} já está derrotado!`);
        }
    }
    curar(valor) {
        // Se estiver derrotado, não permita cura
        if (this.#vida <= 0) {
            return;
        }
        // Caso esteja vivo, aumente a vida
        this.#vida = this.#vida + valor;
        console.log(`${this.nome} foi curado em ${valor}`);
    }
}

class Curandeiro {
    constructor(nome){
        this.nome = nome;
    }

    curarPersonagem(personagem, valor) {
        // Curandeiro NÃO pode acessar personagem.#vida
        // Então use um método público de Personagem
        personagem.curar(valor)
        console.log(`${this.nome} realizou a cura.`);
    }
}

const personagem1 = new Personagem("Sidne", 150, 1);
const personagem2 = new Personagem("Chloe", 100, 1);
const curandeiro1 = new Curandeiro("Clebinho");

personagem1.receberDano(50);
personagem1.receberDano(50);

curandeiro1.curarPersonagem(personagem1, 40);


console.log(personagem1.apresentar());
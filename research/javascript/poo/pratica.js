class Personagem {
    #vida
    #nivel
    constructor(nome, vida, nivel) {
        // guarda os valores recebidos na propriedade do objeto
        this.nome = nome;
        this.#vida = vida;
        this.#nivel = nivel;
    }

    apresentar() {
        // this para acessar os dados do próprio personagem
        return `Meu nome é ${this.nome}, sou nível ${this.#nivel} e tenho ${this.#vida} de vida`;
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
    
    get vida() {
        return this.#vida;
    }

    get nivel() {
        return this.#nivel;
    }

    set nivel(novoNivel) {
        if (novoNivel <= 0) {
            return console.log(`O nível deve ser maior que zero.`);
        }
        this.#nivel = novoNivel;
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

class Guerreiro extends Personagem {
    constructor (nome, vida, nivel, forca) {
        super(nome, vida, nivel);
        this.forca = forca
    }

    golpePesado(alvo) {
        const dano = this.forca * 2

        console.log(`${this.nome} usou golpe pesado em ${alvo.nome} causando ${dano} de dano`);
        this.atacar(alvo, dano);
    }

    apresentarGuerreiro() {
        const apresentacaoBase = super.apresentar();
        return `${apresentacaoBase}. Minha força é ${this.forca}`;
    }
}

const guerreiro = new Guerreiro(
    "Kratos",
    200,
    5,
    30
);

const inimigo = new Personagem(
    "Goblin",
    100,
    2
);


console.log(guerreiro.apresentarGuerreiro());

// Deve causar 60 de dano
guerreiro.golpePesado(inimigo);

// Confira a vida restante do Goblin usando
// algo público que Personagem já possui.
console.log(`Vida do Goblin: ${inimigo.vida}`);
class Motor {
    constructor(potencia) {
        this.potencia = potencia;
        this.ligado = false;
    }

    ligar() {
        this.ligado = true;

        return `Motor de ${this.potencia}cv ligado.`;
    }

    desligar() {
        this.ligado = false;

        return "Motor desligado.";
    }
}

class Carro {
    constructor(modelo, potenciaMotor) {
        this.modelo = modelo;

        // Composição:
        // Carro possui um objeto Motor
        this.motor = new Motor(potenciaMotor);
    }
    // A classe Carro não precisa saber exatamente como o motor funciona internamente. Ela simplesmente utiliza o objeto Motor.
    ligarCarro() {
        return `${this.modelo}: ${this.motor.ligar()}`;
    }
}

const carro = new Carro("Civic", 150);


console.log(carro.ligarCarro());

console.log(carro.motor.potencia);
// Métodos são funções pertencentes ao objeto ou à classe. Se propriedades representam o que o objeto tem, métodos representam o que ele faz.
class ContaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    // Método
    depositar(valor) {
        this.saldo += valor;

        console.log(`Depósito de R$ ${valor} realizado.`);
    }

    // Método
    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
            return;
        }

        this.saldo -= valor;

        console.log(`Saque de R$ ${valor} realizado.`);
    }

    // Método
    consultarSaldo() {
        return `Saldo atual: R$ ${this.saldo}`;
    }
}

const conta = new ContaBancaria("Sidne", 1000);

conta.depositar(500);
conta.sacar(200);

console.log(conta.consultarSaldo());
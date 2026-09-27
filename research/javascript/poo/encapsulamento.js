// Encapsulamento significa proteger os dados internos do objeto e controlar como eles podem ser alterados.
// O saldo só pode ser manipulado através dos métodos da própria classe. Isso impede alterações indevidas.
class ContaBancaria {
    // Propriedade privada
    #saldo;

    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log("O depósito precisa ser maior que zero.");
            return;
        }

        this.#saldo += valor;
    }

    sacar(valor) {
        if (valor <= 0) {
            console.log("Valor inválido.");
            return;
        }

        if (valor > this.#saldo) {
            console.log("Saldo insuficiente.");
            return;
        }

        this.#saldo -= valor;
    }

    consultarSaldo() {
        return this.#saldo;
    }
}

const conta = new ContaBancaria("Sidne", 1000);

conta.depositar(500);
conta.sacar(200);

console.log(conta.consultarSaldo());

// Isso causaria erro porque #saldo é privado:
// console.log(conta.#saldo);
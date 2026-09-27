// Propriedades representam o estado de um objeto. Por exemplo, uma conta bancária pode possuir: titular, saldo, numero. Esses dados podem mudar durante a execução do programa.
class ContaBancaria {
    constructor(titular, numero, saldo) {
        this.titular = titular;
        this.numero = numero;
        this.saldo = saldo;
    }
}

const conta = new ContaBancaria(
    "Sidne",
    "12345-6",
    1000
);

console.log(conta.titular);
console.log(conta.numero);
console.log(conta.saldo);

// Alterando uma propriedade
conta.saldo = 1500;

console.log(conta.saldo);
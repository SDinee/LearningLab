// Abstração significa representar apenas as características importantes de algo, escondendo detalhes desnecessários.
// JavaScript não possui classes abstratas nativas iguais a linguagens como Java e C#. Mas podemos criar esse comportamento manualmente.
class Pagamento {
    constructor(valor) {
        this.valor = valor;
    }

    // A classe geral define a ideia de pagamento
    processar() {
        throw new Error("O método processar() precisa ser implementado.");
    }
}

class PagamentoPix extends Pagamento {
    processar() {
        return `PIX de R$ ${this.valor} processado com sucesso.`;
    }
}

class PagamentoCartao extends Pagamento {
    processar() {
        return `Pagamento de R$ ${this.valor} no cartão processado.`;
    }
}

const pix = new PagamentoPix(150);
const cartao = new PagamentoCartao(300);

console.log(pix.processar());
console.log(cartao.processar());
// O constructor é um método especial executado automaticamente quando usamos new.
class Produto {
    constructor(nome, preco, estoque) {
        // Esses valores são recebidos quando o objeto é criado
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    exibirProduto() {
        return `${this.nome} - R$ ${this.preco} - Estoque: ${this.estoque}`;
    }
}

const notebook = new Produto("Notebook Lenovo", 3500, 10);
const mouse = new Produto("Mouse Logitech", 150, 25);

console.log(notebook.exibirProduto());
console.log(mouse.exibirProduto());
const produtos = [];

export function cadastrarProduto(produto) {
    produtos.push(produto);
}

export function listarProdutos() {
    return produtos;
}
const produtos = [
    { nome: "Mouse", preco: 100 },
    { nome: "Teclado", preco: 150 },
    { nome: "Headset", preco: 200 }
];

const produtosFormatados = produtos.map(({ nome, preco }) => {
    return `${nome} - R$ ${preco}`;
});

console.log(produtosFormatados);
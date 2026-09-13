const produtos = [
    { nome: "Mouse", preco: 100, quantidade: 2 },
    { nome: "Teclado", preco: 150, quantidade: 1 },
    { nome: "Headset", preco: 200, quantidade: 1 }
];

// 1. Calcular subtotal
const calcularSubtotal = (produtos) => {
    return produtos
        .map(p => p.preco * p.quantidade)
        .reduce((total, valor) => total + valor, 0);
};

// 2. Calcular desconto
const calcularDesconto = (subtotal, percentual = 0.10) => {
    return subtotal * percentual;
};

// 3. Calcular total
const calcularTotal = (subtotal, desconto) => subtotal - desconto;

// 4. Juntar tudo
function finalizarPedido(produtos) {
    const subtotal = calcularSubtotal(produtos);
    const desconto = calcularDesconto(subtotal);
    const total = calcularTotal(subtotal, desconto);
    return { subtotal, desconto, total };
}

const resultado = finalizarPedido(produtos);
console.log(resultado);
// { subtotal: 550, desconto: 55, total: 495 }
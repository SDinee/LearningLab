const produtos = [
    { nome: "Mouse", preco: 100 },
    { nome: "Teclado", preco: 150 },
    { nome: "Headset", preco: 200 }
];

const nomes = produtos.map(produto => produto.nome);

console.log(nomes);

// OU
                            // ({ nome }) -> "Para cada objeto que chegar aqui, extraia a propriedade nome."
const nomess = produtos.map(({ nome }) => nome);

console.log(nomess);
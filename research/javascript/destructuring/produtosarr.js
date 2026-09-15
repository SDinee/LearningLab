const produtos = [
    { nome: "Mouse", preco: 100 },
    { nome: "Teclado", preco: 150 },
    { nome: "Headset", preco: 200 }
];

const [primeiro, ,terceiro] = produtos;

console.log(primeiro);
console.log(terceiro);


const { nome, preco } = primeiro;

console.log(nome);
console.log(preco);
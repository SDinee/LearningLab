import { cadastrarUsuario, listarUsuarios } from "./usuarios.js";

import { cadastrarProduto, listarProdutos } from "./produtos.js";

cadastrarUsuario({
    nome: "Sidne",
    idade: 21
});

cadastrarProduto({
    nome: "Mouse",
    preco: 100
});

console.log(listarUsuarios());
console.log(listarProdutos());
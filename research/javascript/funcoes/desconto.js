//Valores padrão se o argumento não for passado, usa-se o valor definido.
function desconto(preco, taxa = 0.1) {
  return preco - preco * taxa;
}

console.log(desconto(100)); // 90
console.log(desconto(100, 0.2)); // 80
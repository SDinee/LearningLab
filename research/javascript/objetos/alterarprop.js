let pessoa = {
  nome: "Carlos"
};

console.log(pessoa.nome); // "Carlos"
console.log(pessoa["nome"]); // "Carlos"

pessoa.nome = "João";
console.log(pessoa.nome); // "João"

pessoa.altura = 1.75;
console.log(pessoa.altura); // 1.75

delete pessoa.idade;
console.log(pessoa); // { nome: "João", altura: 1.75 }

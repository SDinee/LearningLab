let pessoa = {
  nome: "Carlos",
  falar: function() {
    return `Olá, meu nome é ${this.nome}`;
  }
};
console.log(pessoa.falar()); // "Olá, meu nome é Carlos"
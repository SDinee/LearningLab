// Funções com vários parâmetros podem receber quantos valores forem necessários.
function apresentar(nome, idade, cidade) {
  return `${nome}, ${idade} anos, mora em ${cidade}`;
}


console.log(apresentar("Maria", 25, "São Paulo"));

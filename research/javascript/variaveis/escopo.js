// Variáveis declaradas fora de funções ficam disponíveis em qualquer parte do código.
let global = "Estou no escopo global";

function teste() {
  console.log(global); // acessa normalmente
}
teste();

// Variáveis declaradas dentro de uma função só existem dentro dela.
function exemplo() {
  let local = "Estou dentro da função";
  console.log(local); // funciona
}
exemplo();
console.log(local); // ERRO: local não existe fora da função

// Variáveis declaradas dentro de {} só existem ali. var não respeita esse escopo, mas let e const sim.
if (true) {
  let bloco = "Dentro do bloco";
  console.log(bloco); // funciona
}
console.log(bloco); // ERRO: não existe fora do bloco

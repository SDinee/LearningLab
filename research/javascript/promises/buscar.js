function buscarDados() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Dados recebidos");
        }, 2000);
    });
}

buscarDados().then(resultado => {
    console.log(resultado);
});

/* buscarDados()
      ↓
Promise pending
      ↓
espera 2 segundos
      ↓
resolve("Dados recebidos")
      ↓
then
      ↓
console.log()

Isso simula algo como:

pedir dados para API
↓
esperar servidor responder
↓
receber dados */
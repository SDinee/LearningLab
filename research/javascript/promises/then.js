const promessa = Promise.resolve("Pizza chegou");
// Aqui você está criando uma Promise que já deu certo.

promessa.then(resultado => {
    console.log(resultado);
});

// O .then() quer dizer: “Quando der certo, faça isso.”
const promessa = Promise.reject("Pizza não chegou");

promessa.catch(erro => {
    console.log(erro);
});
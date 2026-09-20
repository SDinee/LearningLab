const promessa = new Promise((resolve, reject) => {
    const temPizza = false;

    if (temPizza) {
        resolve("Pizza pronta");
    } else {
        reject("Sem pizza");
    }
});

promessa.then(resolvido => {
        console.log(resolvido);
    })
    .catch(rejeitado => {
        console.log(rejeitado);
    });
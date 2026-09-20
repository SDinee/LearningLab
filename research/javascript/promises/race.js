// race = corrida. "Qual Promise termina primeiro?"


const promessaA = new Promise(resolve => {
    setTimeout(() => {
        resolve("A");
    }, 1000);
});

const promessaB = new Promise(resolve => {
    setTimeout(() => {
        resolve("B");
    }, 500);
});

Promise.race([promessaA, promessaB])
    .then(resultado => {
        console.log(resultado);
    });
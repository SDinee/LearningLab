// "Não importa se deram certo ou errado. Quero saber como TODAS terminaram."

Promise.allSettled([
    Promise.resolve("ok"),
    Promise.reject("erro")
])
    .then(console.log);
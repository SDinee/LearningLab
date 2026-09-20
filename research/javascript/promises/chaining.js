Promise.resolve(2)
    .then(n => n * 2)
    .then(n => n + 1)
    .then(console.log);


/* Começamos com: 2

Primeiro:
.then(n => n * 2)

Então:
2 × 2 = 4

O 4 vai para o próximo:
.then(n => n + 1)

Então:
4 + 1 = 5

E o 5 vai para:
.then(console.log); */
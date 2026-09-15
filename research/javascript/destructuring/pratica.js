const usuarios = [
    {
        nome: "Ana",
        idade: 20,
        cidade: "Rio"
    },
    {
        nome: "Carlos",
        idade: 25,
        cidade: "Niterói"
    },
    {
        nome: "Maria",
        idade: 30,
        cidade: "São Gonçalo"
    }
];

const nomesIdades = usuarios.map(({ nome, idade }) => {
    return { nome, idade };
});

console.log(nomesIdades);

const nomesCidade = usuarios.map(({nome, cidade}) => {
    return { nome, cidade };
});

console.log(nomesCidade);

const idadeMaiorQueVinte = usuarios.filter(({idade}) => idade > 20).map(({nome, idade}) => {
    return { nome, idade };
});

console.log(idadeMaiorQueVinte);
// uma função que chama a si mesma até que uma condição de parada seja atingida.
//  Recursividade é uma forma de repetição, mas feita através de chamadas da própria função.

function contagem(n) {

    // CONDIÇÃO DE PARADA
    // Quando n chegar a 0 ou menos,
    // a função para de chamar a si mesma.
    if (n <= 0) return;

    // Mostra o valor atual
    console.log(n);

    // A função chama ela mesma,
    // mas agora com n diminuído em 1
    contagem(n - 1);
}

// Começamos com 5
contagem(5);


// while

let n = 5;

while (n > 0) {
    console.log(n);
    n--;
}

/*while:
"enquanto a condição for verdadeira,
 continue repetindo"

recursividade:
"execute e depois chame a mim mesma
 com um valor menor"*/
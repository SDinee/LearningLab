// Um efeito colateral acontece quando uma função altera ou interage com algo que está fora dela.
// Essa variável está FORA da função.
let contador = 0;

function incrementar() {

    // A função altera a variável externa.
    contador++;
}

// Antes de executar a função:
console.log(contador); // 0

// Executamos a função.
incrementar();

// Agora a função modificou "contador".
console.log(contador); // 1

// Executamos novamente.
incrementar();

// A variável externa foi alterada novamente.
console.log(contador); // 2
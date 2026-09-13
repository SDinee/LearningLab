// Arrow function com retorno implícito
// Recebe dois valores e retorna a multiplicação. Como não usamos {}, o resultado é retornado automaticamente.
const multiplicar = (a, b) => a * b;

console.log(multiplicar(5, 3)); // 15


// Arrow function com return explícito
// As chaves {} indicam o corpo da função. Como usamos {}, precisamos usar return para devolver o resultado.
const multiplicar2 = (a, b) => {
    return a * b;
};

console.log(multiplicar2(5, 3)); // 15


// Arrow function com várias instruções
//Quando você precisa fazer mais coisas dentro da função, normalmente usa {}:
const calcular = (a, b) => {
    // Primeiro fazemos a multiplicação.
    const resultado = a * b;

    // Mostramos o resultado no console.
    console.log(`Resultado: ${resultado}`);

    // Devolvemos o resultado.
    return resultado;
};

calcular(5, 3); // Resultado: 15


//Arrow function com apenas um parâmetro
//Quando existe apenas um parâmetro, os parênteses são opcionais:
// Com parênteses
const dobro = (numero) => numero * 2;

// Sem parênteses
const dobro2 = numero => numero * 2;

console.log(dobro(5));  // 10
console.log(dobro2(5)); // 10


//Arrow function sem parâmetros
//Nesse caso, os () são obrigatórios:
// A função não recebe nenhum parâmetro.
const saudacao = () => "Olá!";

console.log(saudacao()); // Olá!


//Uma função que NÃO retorna nada
//Também podemos usar uma arrow function apenas para executar uma ação:
const mostrarMensagem = () => {
    // Apenas executa uma ação.
    console.log("Olá, mundo!");
};

mostrarMensagem();
// Percorre o array e acumula os valores até chegar a um único resultado.
let valores = [10, 20, 30];

// Começa com 0
// Depois vai somando cada valor
let soma = valores.reduce((total, valor) => {
    return total + valor;
}, 0);

// total = o que já foi acumulado
// valor = o elemento atual do array

/*              valor
               ↓
total = 0  +  10  = 10
                    ↓
total = 10 +  20  = 30
                    ↓
total = 30 +  30  = 60
                    ↓
                 resultado
                    60*/
                    
console.log(soma);
// 60
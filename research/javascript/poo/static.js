// Normalmente precisamos criar um objeto antes de usar um método. Um método static é diferente. 
// Ele pertence à própria classe, e não aos objetos criados pela classe. É muito usado para funções utilitárias.
class Calculadora {
    static somar(a, b) {
        return a + b;
    }

    static subtrair(a, b) {
        return a - b;
    }

    static multiplicar(a, b) {
        return a * b;
    }

    static dividir(a, b) {
        if (b === 0) {
            return "Não é possível dividir por zero.";
        }

        return a / b;
    }
}

// Não precisamos fazer:
// const calculadora = new Calculadora();

console.log(Calculadora.somar(10, 5));
console.log(Calculadora.subtrair(10, 5));
console.log(Calculadora.multiplicar(10, 5));
console.log(Calculadora.dividir(10, 5));
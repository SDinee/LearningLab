// Polimorfismo significa que objetos diferentes podem responder ao mesmo método de maneiras diferentes.
class Animal {
    falar() {
        return "Som genérico.";
    }
}

class Cachorro extends Animal {
    falar() {
        return "Au au!";
    }
}

class Gato extends Animal {
    falar() {
        return "Miau!";
    }
}

class Vaca extends Animal {
    falar() {
        return "Muuu!";
    }
}

const animais = [
    new Cachorro(),
    new Gato(),
    new Vaca()
];

// Não precisamos verificar qual animal é.
// Apenas chamamos falar().
for (const animal of animais) {
    console.log(animal.falar());
}
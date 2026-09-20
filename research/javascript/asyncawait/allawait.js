// ===== FUNÇÃO ASYNC =====

async function paralelo() {

    // espera todas as Promises terminarem
    const [a, b] = await Promise.all([
        Promise.resolve("A"),
        Promise.resolve("B")
    ]);

    console.log(a, b);
}

// ===== CHAMANDO =====

paralelo(); // "A B"
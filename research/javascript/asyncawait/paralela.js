// ===== FUNÇÃO PARA SIMULAR OPERAÇÃO =====

function esperar(nome, tempo) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(nome);
        }, tempo);
    });
}

// ===== EXECUÇÃO PARALELA =====

async function paralelo() {

    const [a, b] = await Promise.all([
        esperar("A", 2000),
        esperar("B", 2000)
    ]);

    console.log(a, b);
}

// ===== CHAMANDO =====

paralelo();
// ===== FUNÇÃO DE ESPERA =====

function esperar(nome, tempo) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(nome);
        }, tempo);
    });
}

// ===== EXECUÇÃO SEQUENCIAL =====

async function sequencial() {
    const a = await esperar("A", 3000);
    const b = await esperar("B", 2000);

    console.log(a, b);
}

// ===== CHAMANDO =====

sequencial();
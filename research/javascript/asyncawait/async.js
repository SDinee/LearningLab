// async diz: “Essa função trabalha de forma assíncrona e sempre vai retornar uma Promise.”

// ===== FUNÇÃO ASYNC =====

async function exemplo() {
    return "Olá!";
}

// ===== CHAMANDO A FUNÇÃO =====

exemplo().then(console.log); // "Olá"
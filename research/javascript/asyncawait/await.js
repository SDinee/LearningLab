// await significa: “Espere essa Promise terminar antes de continuar esta função.”

// ===== FUNÇÃO QUE DEVOLVE UMA PROMISE =====

function buscarDados() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Dados recebidos"), 2000);
    });
}

// ===== FUNÇÃO ASYNC QUE ESPERA A PROMISE =====

async function buscarUsuario() {
    const usuario = await buscarDados();

    return usuario;
}

// ===== CHAMANDO A FUNÇÃO =====

buscarUsuario().then(console.log); // "Dados recebidos"
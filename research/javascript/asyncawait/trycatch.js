// ===== PROMISE QUE PODE FALHAR =====

function buscarDados() {
    return new Promise((resolve, reject) => {
        const sucesso = false;

        if (sucesso) {
            resolve("Dados recebidos");
        } else {
            reject(new Error("Erro ao buscar dados"));
        }
    });
}

// ===== ASYNC/AWAIT + TRY/CATCH =====

async function executar() {
    try {
        const dados = await buscarDados();
        console.log(dados);
    } catch (erro) {
        console.log("Erro:", erro.message);
    }
}

// ===== CHAMANDO =====

executar();
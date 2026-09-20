// ===== OPERAÇÃO ASSÍNCRONA =====

function buscarUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuarioEncontrado = false;

            if (usuarioEncontrado) {
                resolve({
                    nome: "Sidne"
                });
            } else {
                reject(
                    new Error("Usuário não encontrado.")
                );
            }
        }, 1000);
    });
}

// ===== ASYNC/AWAIT =====

async function executar() {
    try {
        // espera a Promise terminar
        const usuario = await buscarUsuario();
        console.log(usuario);
    } catch (erro) {
        // recebe o reject
        console.log("Erro:", erro.message);
    }
}

// ===== EXECUÇÃO =====

executar();
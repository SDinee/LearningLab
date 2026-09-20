// ===== CAMADA DE DADOS =====

async function buscarUsuarioNoBanco() {
    throw new Error("Falha ao buscar usuário.");
}

// ===== CAMADA DE SERVIÇO =====

async function buscarUsuario() {
    // erro pode subir daqui
    const usuario = await buscarUsuarioNoBanco();
    return usuario;
}

// ===== CAMADA QUE TRATA =====

async function executar() {
    try {
        const usuario = await buscarUsuario();
        console.log(usuario);
    } catch (erro) {
        console.log("Erro tratado:", erro.message);
    }

}

// ===== EXECUÇÃO =====

executar();
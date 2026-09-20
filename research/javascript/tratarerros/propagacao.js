// ===== CAMADA MAIS INTERNA =====

function buscarUsuarioNoBanco(id) {
    const usuario = null;
    if (!usuario) {
        throw new Error("Usuário não encontrado.");
    }
    return usuario;
}

// ===== CAMADA INTERMEDIÁRIA =====

function carregarUsuario(id) {
    // não tem try/catch aqui
    // então, se der erro, ele continua subindo
    const usuario = buscarUsuarioNoBanco(id);
    return usuario;
}

// ===== CAMADA EXTERNA =====

function executar() {
    try {
        const usuario = carregarUsuario(10);
        console.log(usuario);
    } catch (erro) {
        // erro chegou até aqui
        console.log("Erro tratado:", erro.message);
    }
}

// ===== EXECUÇÃO =====

executar();
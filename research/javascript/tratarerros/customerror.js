// ===== ERRO PERSONALIZADO =====
// Erro personalizado é só você criar um tipo de erro com um nome específico, em vez de usar sempre o genérico Error.

class UsuarioNaoEncontradoError extends Error {
    constructor() {
        // chama o construtor de Error
        super("Usuário não encontrado.");
        // altera o nome do erro
        this.name = "UsuarioNaoEncontradoError";
    }
}

// ===== FUNÇÃO =====

function buscarUsuario(id) {
    const usuario = null;
    if (!usuario) {
        throw new UsuarioNaoEncontradoError();
    }
    return usuario;
}

// ===== TRATAMENTO =====

try {
    const usuario = buscarUsuario(10);
    console.log(usuario);
} catch (erro) {
    console.log("Tipo:", erro.name);
    console.log("Mensagem:", erro.message);
}
// ===== FUNÇÃO =====

function mostrarNome(usuario) {
    // imaginávamos que usuario sempre existiria
    return usuario.nome.toUpperCase();
}

// ===== TRATAMENTO =====

try {
    const usuario = undefined;
    console.log(mostrarNome(usuario));
} catch (erro) {
    // provavelmente existe algum bug ou problema na aplicação
    console.log("Erro inesperado:", erro.message);
}
// ===== PRIMEIRA OPERAÇÃO =====

function buscarUsuario() {
    return Promise.resolve("Sidne");
}

// ===== SEGUNDA OPERAÇÃO =====

function buscarPedidos() {
    return Promise.resolve(["Pizza", "Hambúrguer"]);
}

// ===== USANDO AS DUAS =====

async function carregarDados() {
    const usuario = await buscarUsuario();
    const pedidos = await buscarPedidos();

    console.log(usuario);
    console.log(pedidos);
}

// ===== CHAMANDO =====

carregarDados();
const usuarios = [];

export function cadastrarUsuario(nome) {
    usuarios.push(nome);
}

export function listarUsuarios() {
    return usuarios;
}
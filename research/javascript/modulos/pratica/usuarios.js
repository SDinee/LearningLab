const usuarios = [
    { nome: "Ana", idade: 20 },
    { nome: "Carlos", idade: 25 },
    { nome: "Maria", idade: 30 }
];

export function listarUsuarios() {
    const lista = usuarios.map(usuario => usuario, 0);
    return lista
}

export function buscarUsuario() {
    const busca = usuarios.find(usuario => usuario.nome.startsWith("C"));
    // destructing -> const busca = usuarios.find(({ nome }) => nome.startsWith("C"));
    // para buscar nome -> const busca = usuarios.find(({ nome }) => nome === nomeBuscado);
    return busca
}
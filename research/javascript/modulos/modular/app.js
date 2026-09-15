import { listarUsuarios } from "./usuarios.js";

console.log(listarUsuarios());


import { usuarios, listarUsuarios2 } from "./usuarios.js";

// Pode importar os dois:
console.log(usuarios);
console.log(listarUsuarios2());

// Você também pode importar só um, o fato de o arquivo exportar 10 coisas não obriga você a importar as 10.
import { listarUsuarios2 } from "./usuarios.js";
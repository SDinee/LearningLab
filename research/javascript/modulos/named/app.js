// Isso funciona:
// import { somar } from "./calcular.js";

// Mas isso não:
// import { soma } from "./calcular.js";
// Porque não existe um named export chamado soma.

// Porém você pode renomear usando as:
import { somar as realizarSoma } from "./calcular.js";

console.log(realizarSoma(5, 2));
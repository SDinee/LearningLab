// maneira de declarar variáveis que precisam ser sobrescritas.
let idade = 30;

// deve ser usado em casos onde a variável não precise ser reatribuída, sobrescrita.
const nascimento = "30/06/1990";

// "vaza" para fora de blocos (como if ou for), enquanto let e const ficam restritos às chaves {}. 
// é considerada obsoleta para uso moderno; a recomendação é usar const por padrão e let apenas quando necessário.
var cidade = "São Paulo";
int num1 = 10;
int num2 = 10;

if (num1 == num2) {
    Console.WriteLine("iguais");
} else {
    Console.WriteLine("diferentes");
}
/* diferente */
if (num1 != num2) {
    Console.WriteLine("diferentes");
} else {
    Console.WriteLine("iguais");
}

if (num1 > num2) {
    Console.WriteLine("num1 é maior que num2");
} else if (num1 < num2) {
    Console.WriteLine("num1 é menor que num2");
} else {
    Console.WriteLine("num1 é igual a num2");
}

if (num1 >= num2) {
    Console.WriteLine("num1 é maior ou igual a num2");
} else {
    Console.WriteLine("num1 é menor que num2");
}


bool condicao1 = true;
bool condicao2 = false;

/* && = E, || = OU, ! = NÃO */
if (condicao1 && condicao2) {
    Console.WriteLine("As duas condições são verdadeiras");
} else {
    Console.WriteLine("Uma das condições é falsa");
}

if (condicao1 || condicao2) {
    Console.WriteLine("Uma das condições é verdadeira");
} else {
    Console.WriteLine("As duas condições são falsas");
}

if (!condicao1) {
    Console.WriteLine("A condição 1 é falsa");
} else {
    Console.WriteLine("A condição 1 é verdadeira");
}
int idade = 30;

if (idade >= 18) {
    Console.WriteLine("Você é maior de idade.");
} else if (idade < 18) {
    Console.WriteLine("Você é menor de idade.");
} else {
    Console.WriteLine("Idade inválida.");
}

Console.WriteLine("\n");

string nome = "Clebinho";

switch (nome) {
    case "Clebinho":
        Console.WriteLine("Olá, Clebinho!");
        break;
    case "João":
        Console.WriteLine("Olá, João!");
        break;
    default:
        Console.WriteLine("Olá, desconhecido!");
        break;
}

Console.WriteLine("\n");

for (int i = 0; i < 5; i++) {
    Console.WriteLine("O valor de i é: " + (i + 1));
}

Console.WriteLine("\n");

int j = 0;

while (j < 5) {
    Console.WriteLine("O valor de j é: " + (j + 1));
    j++;
}

Console.WriteLine("\n");

do {
    Console.WriteLine("Será que o do while executa pelo menos uma vez?");
} while (false);
String nome = "Clebinho";
int idade = 30;
long cpf = 12345678900;
float altura = 1.75f;
double peso = 70.52323;
decimal saldo = 1000.50m;
bool CNH = true;
char sexo = 'M';
var variavel = "Variável do tipo var";

Console.WriteLine($"Nome: {nome}, Idade: {idade}, CPF: {cpf}, Altura: {altura}, Peso: {peso} ,Saldo: {saldo}, CNH: {CNH}, Sexo: {sexo}");
Console.WriteLine($"Variável do tipo var: {variavel}");
/* Use $ para interpolação de strings */

Console.WriteLine("Nome: " + nome + ", Idade: " + idade + ", CPF: " + cpf + ", Altura: " + altura + ", Peso: " + peso + ", Saldo: " + saldo + ", CNH: " + CNH + ", Sexo: " + sexo);
/* Use + para concatenar strings, pior para leitura dependendo da quantidade de variáveis */

int num1 = 10;
int num2 = 20;

Console.WriteLine($"Soma: {num1 + num2}");
Console.WriteLine($"Subtração: {num1 - num2}");
Console.WriteLine($"Multiplicação: {num1 * num2}");
Console.WriteLine($"Divisão: {num1 / num2}");
Console.WriteLine($"Resto da divisão: {num1 % num2}");
Console.WriteLine($"Potência: {Math.Pow(num2, num1)}");
Console.WriteLine($"Raiz quadrada: {Math.Sqrt(num1)}");
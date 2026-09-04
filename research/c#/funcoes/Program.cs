/*void pois ela não retorna nada, caso contrário, usaria 'static string Saudacao(String nome)' */
static void Saudacao(String nome, String sobrenome = "Silva") {
    Console.WriteLine("Olá, " + nome + " " + sobrenome + "!");
}
void Idade(int idade) {
    Console.WriteLine("Você tem " + idade + " anos.");
}

Saudacao("Clebinho");
Idade(25);

/*Funções e métodos são a mesma coisa*/
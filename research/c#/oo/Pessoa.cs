/*namespace serve para organizar o código em grupos lógicos*/
namespace oo {
    public class Pessoa {
        public string Nome;
        public int Idade;

        public void Apresentar()
        {
            System.Console.WriteLine($"Olá, meu nome é {Nome} e tenho {Idade} anos.");
        }
    }
}
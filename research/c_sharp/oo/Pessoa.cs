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
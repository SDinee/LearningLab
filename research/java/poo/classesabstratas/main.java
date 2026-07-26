package research.java.poo.classesabstratas;

public class main {
    public static void main(String[] args) {

        humano pessoaHumano = new herancahumano();
        pessoaHumano.falar();
        pessoaHumano.andar();
        pessoaHumano.respirar(); // Chamada do método concreto da classe abstrata
    }
}

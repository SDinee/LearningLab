package research.java.poo.except;

public class exemplo {
    public static void main(String[] args) {
        try {
            int resultado = (10 / 0); // Tentativa de dividir por zero
            System.out.println("Resultado: " + resultado);
        } catch (ArithmeticException e) {
            // exceção capturada, exibe uma mensagem de erro
            System.out.println("Erro: Divisão por zero não é permitida.");
        }
    }
}

/* 
Tipos de exceções 
NullPointerExceção
ArrayIndexOutOfBoundsException
RuntimeException
IOException
*/
package research.java.sintaxe.casting;

public class dado {
    public static void main(String[] args) {
        double resultado = 10.01;
        int resultadoInt = (int) resultado; // Casting explícito de double para int
        
        int numeroInt = 10;
        double numeroDouble = numeroInt; // Casting implícito de int para double

        String texto = "123";
        int numero = Integer.parseInt(texto); // Conversão de String para int casting explícito

        String novaString = String.valueOf(numero);
    }
}

package research.java.sintaxe.loops.whiles;

public class whilesimples {
    // Executa até que a condição seja falsa, no caso, enquanto i for menor que 5
    public static void main(String[] args) {
        int contador = 0;
        while (contador < 10) {
            System.out.println("Estou no while");
            contador++;
        // se escrever contador--, o loop será infinito, pois o contador nunca será maior que 10
        //se esquecer o contador++, o loop será infinito, pois o contador nunca será maior que 10
        }
    }
}

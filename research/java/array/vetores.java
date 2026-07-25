package research.java.array;

public class vetores {
    public static void main(String[] args) {

        int[] colecaoDeInteiros = {1, 2, 3, 4, 5};
        int[] numeros = new int[10]; // array com 10 posições, todas inicializadas com 0 
        // ao criar array destas maneiras terá um tamanho fixo, não podendo ser adicionado mais elementos, apenas alterando os existentes
        System.out.println(colecaoDeInteiros[0]);
        System.out.println(colecaoDeInteiros.length); // length é tamanho
    }
}

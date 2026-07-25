package research.java.sintaxe.array;

public class vetores {
    public static void main(String[] args) {

        int[] colecaoDeInteiros = {1, 2, 3, 4, 5};
        int[] numeros = new int[5]; // array com 5 posições, todas inicializadas com 0
        // ao criar array destas maneiras terá um tamanho fixo, não podendo ser adicionado mais elementos, apenas alterando os existentes
        numeros[0] = 1;
        numeros[1] = 2;
        numeros[2] = 3;
        numeros[3] = 4;
        numeros[4] = 5;

        System.out.println(colecaoDeInteiros[0]);
        System.out.println(colecaoDeInteiros.length); // length é tamanho

        System.out.println("=".repeat(30));
        // repetir 30 vezes o caractere "="

        System.out.println(numeros[0]);
        System.out.println(numeros[1]);
        System.out.println(numeros[2]);
        System.out.println(numeros[3]);
        System.out.println(numeros[4]);
    }
}

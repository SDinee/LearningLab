package research.java.sintaxe.loops.fors;

public class forearray {
    public static void main(String[] args) {
      String[] nomes2 = new String[10];
        nomes2[0] = "Sergio";
        nomes2[1] = "Cleber";
        nomes2[2] = "Clotilde";
        nomes2[3] = "Gustavo";
        nomes2[4] = "Rafael";

        for (int n = 0; n < nomes2.length; n++) {
            System.out.println(nomes2[n]);
        }
        // utiliza length para percorrer o array, que é fixo, diferente do ArrayList que utiliza size()

        System.out.println("=".repeat(30));

        for (String nome : nomes2) {
            System.out.println(nome);
        }
         // For simples, percorre a lista de nomes e imprime cada elemento, sem precisar de um índice
    }
}

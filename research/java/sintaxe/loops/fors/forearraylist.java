package research.java.sintaxe.loops.fors;

import java.util.ArrayList;

public class forearraylist {
    public static void main(String[] args) {
        ArrayList<String> nomes = new ArrayList<>();
        nomes.add("João");
        nomes.add("Maria");
        nomes.add("José");

        for (int i = 0; i < nomes.size(); i++) {
            System.out.println(nomes.get(i));
        }

        System.out.println("=".repeat(30));

    
        for (String nome : nomes) {
            System.out.println(nome);
        }
        // For simples, percorre a lista de nomes e imprime cada elemento, sem precisar de um índice
    }   
}


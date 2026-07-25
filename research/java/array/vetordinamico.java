package research.java.array;

import java.util.ArrayList;
// ArrayList é uma classe que implementa a interface List, permitindo criar listas dinâmicas, ou seja, listas que podem crescer ou diminuir de tamanho conforme necessário. 
// Diferente dos arrays tradicionais, que têm tamanho fixo, as ArrayLists podem ter elementos adicionados ou removidos a qualquer momento.

public class vetordinamico {
    public static void main(String[] args){
        ArrayList<String> nomes = new ArrayList<>();
        nomes.add("João");
        nomes.add("Maria");
        nomes.add("José");

        System.out.println(nomes.get(0)); // Acessando o primeiro elemento da lista
        System.out.println(nomes.get(1)); // Acessando o segundo elemento da lista
        System.out.println(nomes.get(2)); // Acessando o terceiro elemento da lista
        System.out.println(nomes.size()); // Obtendo o tamanho da lista


        System.out.println("=".repeat(30));
        nomes.remove(0); // Removendo o primeiro elemento da lista
        System.out.println(nomes.size()); // Obtendo o tamanho da lista após a remoção
        
        System.out.println("=".repeat(30));
        System.out.println(nomes.get(0)); // Acessando o novo primeiro elemento da lista após a remoção
        nomes.remove("Maria");
        System.out.println(nomes.get(0));

    }
}
 
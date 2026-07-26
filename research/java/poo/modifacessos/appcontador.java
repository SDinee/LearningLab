package research.java.poo.modifacessos;

public class appcontador {
    public static void main(String[] args){
        Contador meuContador = new Contador(1, 10); // Criação de um objeto da classe Contador
        
    }
}

class Contador {
//  private
//  public
//  default
    protected Contador(int inicio, int fim) {
        System.out.println("Contagem de " + inicio + " até " + fim + ":");
        for (int i = inicio; i <= fim; i++) {
            System.out.print(i + " \n");
        }
        System.out.println("Contagem concluída!");
    }
}
// Neste exemplo, temos uma classe chamada `Contador` que possui um construtor privado.
// Caso esteja definido como privado, o construtor não pode ser chamado diretamente de fora da classe.
// caso esteja definido como protegido, o construtor pode ser chamado apenas por classes do mesmo pacote ou subclasses.
// caso esteja definido como default, quando não é especificado nenhum modificador de acesso, o construtor pode ser chamado apenas por classes do mesmo pacote.
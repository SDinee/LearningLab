package research.java.poo.classes;

public class classe {
    public static void main(String[] args){
        Carro meuCarro = new Carro(); // Criação de um objeto da classe Carro
    }
}

class Carro {
    public Carro() {
        System.out.println("Carro criado!");
    }
}
// Neste exemplo, temos uma classe chamada `Carro` que possui um construtor padrão. 
// Quando um objeto da classe `Carro` é criado no método `main`, o construtor é chamado automaticamente, e a mensagem "Carro criado!" é exibida no console.
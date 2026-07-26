package research.java.poo.classes;

public class classe {
    public static void main(String[] args){
        Carro meuCarro = new Carro("Fusca"); // Criação de um objeto da classe Carro
    }
}

class Carro {
    public Carro(String modelo) {
        System.out.println("Carro criado! Modelo: " + modelo);
    }
}
// Neste exemplo, temos uma classe chamada `Carro` que possui um construtor padrão. 
// Quando um objeto da classe `Carro` é criado no método `main`, o construtor é chamado automaticamente, e a mensagem "Carro criado!" é exibida no console.
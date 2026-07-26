package research.java.poo.classes;

public class carros {
    public static void main(String[] args){
        Carro meuCarro = new Carro("Fusca"); // Criação de um objeto da classe Carro com modelo
        Carro outroCarro = new Carro("Gol"); // Criação de outro objeto da classe Carro com modelo
        
        meuCarro.acelerar(); // Chamada do método acelerar para o primeiro carro
        outroCarro.acelerar(); // Chamada do método acelerar para o segundo carro
    }
}

class Carro {
    String modelo;

    public Carro(String modelo) {
        this.modelo = modelo;
        
        System.out.println("Carro " + this.modelo + " criado!");
    }
// Neste exemplo, temos uma classe chamada `Carro` que possui um construtor que recebe um parâmetro do tipo String. 

    public void acelerar() {
        System.out.println("O carro " + this.modelo + " está acelerando!");
    }    
// O método `acelerar` é um método da classe `Carro` que exibe uma mensagem indicando que o carro está acelerando. 
// Ele utiliza o atributo `modelo` para personalizar a mensagem de acordo com o modelo do carro.
}


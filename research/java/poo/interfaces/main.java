package research.java.poo.interfaces;

public class main {
    public static void main(String[] args){
        moto minhaMoto = new honda(); // Criação de um objeto da classe honda
        
        minhaMoto.acelerar(); // Chamada do método acelerar da interface moto
        minhaMoto.frear(); // Chamada do método frear da interface moto
        minhaMoto.buzinar(); // Chamada do método buzinar da interface moto
    }
}

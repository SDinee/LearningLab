package research.java.poo.classesabstratas;

public class herancahumano extends humano {
    public herancahumano() {
        super( 33);
    }

    @Override
    public void falar() {
        System.out.println("O humano está falando:");
        System.out.println("Atualmente tenho " + idade + " anos.\n");
    }

    @Override
    public void andar() {
        System.out.println("O humano está andando.");
    }
}
// Herança é um conceito fundamental da programação orientada a objetos, que permite que uma classe (subclasse) herde atributos e métodos de outra classe (superclasse).
// métodos já implementados na superclasse podem ser utilizados diretamente na subclasse, enquanto métodos abstratos devem ser implementados na subclasse.
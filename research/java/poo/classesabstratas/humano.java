package research.java.poo.classesabstratas;

public abstract class humano {
    protected int idade;

    public humano(int idade) {
        this.idade = idade;
    }
    
    public abstract void falar(); // Método abstrato, sem implementação
    public abstract void andar(); // Método abstrato, sem implementação

    public void respirar() { // Método concreto, com implementação
        System.out.println("O humano está respirando.");
    }
}
// Classes abstratas são classes que não podem ser instanciadas diretamente, ou seja, não é possível criar objetos a partir delas. 
// Elas servem como base para outras classes e podem conter métodos abstratos, que são métodos sem implementação. 
// As classes que estendem uma classe abstrata devem fornecer implementações para todos os métodos abstratos da classe pai.

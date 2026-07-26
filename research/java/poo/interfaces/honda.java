package research.java.poo.interfaces;

public class honda implements moto {
    @Override
    public void acelerar() {
        System.out.println("A moto honda está acelerando!");
    }

    @Override
    public void frear() {
        System.out.println("A moto honda está freando!");
    }

    @Override
    public void buzinar() {
        System.out.println("A moto honda está buzinando!");
    }
}

// Neste exemplo, temos uma classe chamada `honda` que implementa a interface `moto`.
// Override é uma anotação que indica que o método está sendo sobrescrito da interface.
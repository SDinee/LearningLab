package research.java.sintaxe.condicionais;

public class condicao {
    public static void main(String[] args) {
        byte b = 100;
/*         short s = 23232;
        int i = 255;
        long l = 120000L;
        float f = 10.5f;
        double d = 20.0;
        char c = 'A'; */
        String str = "Como vai?";
        boolean bool = false;

        if(b > 99){
            System.out.println("Verdadeiro");
        } else {
            System.out.println("Falso");
        }

        if(bool){
            System.out.println("Verdadeiro");
        } else {
            System.out.println("Falso");
        }

        if(str.isBlank()) {
            System.out.println("Verdadeiro");
        } else if(str == "Como vai?") {
            System.out.println("Como vai?");
        } else {
            System.out.println("Falso");
        }
    }
}
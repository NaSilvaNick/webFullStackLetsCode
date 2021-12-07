package questao.um;

import java.util.Scanner;

public class Leitor {

    private static Scanner leitor = new Scanner(System.in);

    public static float numero(){

        float numero = leitor.nextFloat();
        return numero;
    }

    public static void fecharLeitor(){

        leitor.close();
    }
}

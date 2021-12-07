package questao.dois;

import java.util.Scanner;

public class Leitor {

    private static Scanner leitor = new Scanner(System.in);

    public static int numero(){

        int numero = leitor.nextInt();
        return numero;
    }

    public static TipoTabuada operacao(){

        TipoTabuada operacao = TipoTabuada.valueOf(leitor.next());
        return operacao;
    }

    public static void fecharLeitor(){ leitor.close(); }
}

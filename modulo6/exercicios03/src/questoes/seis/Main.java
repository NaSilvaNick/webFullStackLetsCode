package questoes.seis;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        textoConsole("Cortador de palavras");

        textoLeitor("Digite uma palavra qualquer: ");
        String palavra = leitorPalavra();

        String palavraCortada = cortarPalavra(palavra);

        textoLeitor("Essa é a sua palavra cortada: ");
        textoConsole(palavraCortada);
    }

    private static String leitorPalavra(){
        Scanner leitor = new Scanner(System.in);
        return leitor.nextLine();
    }

    private static void textoLeitor(String texto){
        System.out.print(texto);
    }

    private static void textoConsole(String texto){
        System.out.println(texto);
    }

    private static String cortarPalavra(String palavra){

        char[] letras = palavra.toCharArray();

        String palavraCortada = "";

        for (int i = 0; i < letras.length; i++){
            if (i % 2 == 0) {
                palavraCortada += Character.toLowerCase(letras[i]);
            }
        }

        return palavraCortada;
    }
}

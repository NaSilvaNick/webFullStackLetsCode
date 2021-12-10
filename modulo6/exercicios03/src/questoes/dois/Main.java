package questoes.dois;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner Leitor = new Scanner(System.in);

        System.out.println("Palavras ao contrario");

        System.out.print("Digite uma palavra: ");
        String palavra = Leitor.next();

        String palavraContrario = invertePalavra(palavra);
        System.out.println("A sua palavra ao contrario é: " + palavraContrario);
    }

    private static String invertePalavra(String palavra){

        char[] letras = palavra.toCharArray();
        String palavraInvertida = "";
        for(int i = letras.length - 1; i >= 0; i--){
            palavraInvertida += letras[i];
        }

        return palavraInvertida;
    }
}

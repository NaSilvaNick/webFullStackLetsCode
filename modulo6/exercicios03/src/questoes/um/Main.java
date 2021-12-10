package questoes.um;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        System.out.println("Lista de 5 frutas");
        String[] lista = criaListadeFrutas(5);
        exibeListaDeFrutas(lista);
    }

    private static void exibeListaDeFrutas(String[] lista){
        System.out.println("Sua lista de Frutas:");
        for( int i = 0 ; i < lista.length; i++){
            System.out.println((i + 1) + "- " + lista[i]);
        }
    }

    private static String[] criaListadeFrutas(int tamanho){
        String[] lista = new String[tamanho];
        Scanner Leitor = new Scanner(System.in);

        for (int i = 0; i < tamanho; i++){
            System.out.print("Digite o nome da " + (i + 1) + "° fruta: ");
            lista[i] = Leitor.nextLine();
        }
        return lista;
    }

}

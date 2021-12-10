package questoes.tres;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        System.out.println("Separador de Ímpares e Pares");

        int[] listaNumeros = criaListaNumeros();

        imprimeImparesPares(listaNumeros);
    }

    private static int[] criaListaNumeros(){
        Scanner Leitor = new Scanner(System.in);
        int[] lista = new int[5];

        for (int i = 0; i < 5; i++) {
            System.out.print("Digite o " + (i + 1) + "° numero: ");
            lista[i] = Leitor.nextInt();
        }

        return lista;
    }

    private static void imprimeImparesPares(int[] lista){
        System.out.println("Numeros Pares:");
        for (int numero : lista) {
            if (numero % 2 == 0) {
                System.out.print(" " + numero);
            }
        }

        System.out.println("\nNumeros Ímpares:");
        for (int numero : lista) {
            if (numero % 2 > 0) {
                System.out.print(" " + numero);
            }
        }
    }
}

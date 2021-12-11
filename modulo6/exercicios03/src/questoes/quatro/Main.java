package questoes.quatro;

import com.sun.source.tree.ReturnTree;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        System.out.println("Fitro de numeros");

        int[] listaNumeros = criaListaNumeros(5);

        float media = obtemMedia(listaNumeros);

        int maior = obtemMaior(listaNumeros);
        int menor = obtemMenor(listaNumeros);

        imprimeNumerosFiltrados(maior, menor,media);
    }

    private static int[] criaListaNumeros(int tamanho){
        Scanner Leitor = new Scanner(System.in);
        int[] lista = new int[tamanho];

        for (int i = 0; i < tamanho; i++) {
            System.out.print("Digite o " + (i + 1) + "° numero: ");
            lista[i] = Leitor.nextInt();
        }

        return lista;
    }

    private static float obtemMedia(int[] lista){
        int soma = 0;
        for(int numero : lista){
            soma += numero;
        }
        return soma / lista.length;
    }

    private static int obtemMaior(int[] lista){
        int maior = lista[0];
        for (int numero : lista) {
            if(numero > maior){
                maior = numero;
            }
        }
        return maior;
    }

    private static int obtemMenor(int[] lista){
        int menor = lista[0];
        for (int numero : lista) {
            if(numero < menor){
                menor = numero;
            }
        }
        return menor;
    }

    private static void imprimeNumerosFiltrados(int maior, int menor, float media){
        System.out.println("O maior número: " + maior);
        System.out.println("O menor número: " + menor);
        System.out.println("A madia dos números que você digitou: " + media);
    }
}

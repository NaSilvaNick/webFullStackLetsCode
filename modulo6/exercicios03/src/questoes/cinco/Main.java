package questoes.cinco;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        System.out.println("Lista de convidados");

        String[] listaConvidados = criaListaConvidados(5);

        String maiorNome = obtemMaiorNome(listaConvidados);

        imprimeMaiorNome(maiorNome);
    }

    private static String[] criaListaConvidados(int tamanho){
        Scanner Leitor = new Scanner(System.in);
        String[] lista = new String[tamanho];

        for (int i = 0; i < tamanho; i++) {
            System.out.print("Digite o " + (i + 1) + "° nome: ");
            lista[i] = Leitor.next();
        }

        return lista;
    }

    private static String obtemMaiorNome(String[] lista){
        String maiorNome = "";
        for (String nome : lista) {
            if (nome.length() > maiorNome.length()){
                maiorNome = nome;
            }

        }
        return maiorNome;
    }

    private static void imprimeMaiorNome(String maiorNome){
        System.out.println("O maior nome é o : " + maiorNome);
    }
}

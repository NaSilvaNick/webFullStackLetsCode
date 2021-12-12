package questoes.sete;

import java.util.Scanner;

public class Main {

    private static Scanner leitor = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("Fitro de idades");

        String[] nomes = new String[5];
        int[] idades = new int[5];

        for (int i = 0; i < nomes.length; i++){

            imprimeTextoConsole("Digite o nome da " + (i + 1) + "° pessoa: ");
            nomes[i] = leitorNome();

            imprimeTextoConsole("Digite a idade de " + nomes[i] + ": ");
            idades[i] = leitorIdade();
        }

        int indiceMaior = obtemIndiceMaior(idades);
        int indiceMenor = obtemIndiceMenor(idades);
        float mediaIdades = obtemMediaIdades(idades);

        imprimeMaiorIdade(nomes[indiceMaior],idades[indiceMaior]);
        imprimeMenorIdade(nomes[indiceMenor],idades[indiceMenor]);
        imprimeMediaIdades(mediaIdades);

    }

    private static String leitorNome(){
        return leitor.nextLine();
    }

    private static int leitorIdade(){
        return leitor.nextInt();
    }

    private static float obtemMediaIdades(int[] lista){
        int soma = 0;
        for(int numero : lista){
            soma += numero;
        }
        return soma / lista.length;
    }

    private static int obtemIndiceMaior(int[] lista){
        int maiorIdade = lista[0];
        int indiceMaiorIdade = 0;

        for (int i = 0; i < lista.length; i++) {
            if(lista[i] > maiorIdade){
                maiorIdade = lista[i];
                indiceMaiorIdade = i;
            }
        }
        return indiceMaiorIdade;
    }

    private static int obtemIndiceMenor(int[] lista){

        int menorIdade = lista[0];
        int indiceMenorIdade = 0;

        for (int i = 0; i < lista.length; i++) {
            if(lista[i] < menorIdade){
                menorIdade = lista[i];
                indiceMenorIdade = i;
            }
        }

        return indiceMenorIdade;
    }

    private static void imprimeTextoConsole(String texto){
        System.out.print(texto);
    }

    private static void imprimeMaiorIdade (String nome, int idade){
        System.out.print("\n");
        System.out.println("A pessoa com maior idade é: ");
        System.out.println(" " + nome + " com " + idade + " anos");
    }

    private static void imprimeMenorIdade (String nome, int idade){
        System.out.print("\n");
        System.out.println("A pessoa com menor idade é: ");
        System.out.println(" " + nome + " com " + idade + " anos");
    }

    private static void imprimeMediaIdades (float mediaIdades){
        System.out.print("\n");
        System.out.println("A média da idades é " + mediaIdades + " anos");
    }
}

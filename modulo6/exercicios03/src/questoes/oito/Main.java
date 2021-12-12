package questoes.oito;

import java.util.Scanner;

public class Main {

    private static Scanner leitor = new Scanner(System.in);

    public static void main(String[] args) {
        System.out.println("Fitro de idades");

        String[] nomes = new String[5];
        float[] pesos = new float[5];
        float[] alturas = new float[5];

        for (int i = 0; i < nomes.length; i++){

            imprimeTextoConsole("Digite o nome da " + (i + 1) + "° pessoa: ");
            nomes[i] = leitor.next();

            imprimeTextoConsole("Digite o peso de " + nomes[i] + ": ");
            pesos[i] = leitor.nextFloat();

            imprimeTextoConsole("Digite a altura de " + nomes[i] + ": ");
            alturas[i] = leitor.nextFloat();

            System.out.print("\n");
        }

        float[] IMCs = calculaIMCs(pesos,alturas);

        verificaIMCs(nomes, IMCs);

    }

    private static String leitorNome(){
        return leitor.nextLine();
    }

    private static float leitorDecimais(){
        return leitor.nextFloat();
    }

    private static void imprimeTextoConsole(String texto){
        System.out.print(texto);
    }

    private static float[] calculaIMCs(float[] pesos, float[] alturas){
        float[] IMCs = new float[5];

        for (int i = 0; i < IMCs.length; i++){
            IMCs[i] = (pesos[i] / (alturas[i] * alturas[i]));
        }

        return IMCs;
    }

    private static void verificaIMCs(String[] nomes, float[] IMCs){
        boolean todosOK = true;

        final float IMC_MINIMO_IDEAL = 18.5f;
        final float IMC_MAXIMO_IDEAL = 25.0f;

        for (int i = 0; i < nomes.length; i++){

            if(IMCs[i] < IMC_MINIMO_IDEAL) {

                System.out.println(nomes[i] + " está abaixo do IMC ideal, seu IMC: " + IMCs[0]);
                todosOK = false;
            } else if (IMCs[i] > IMC_MAXIMO_IDEAL) {

                System.out.println(nomes[i] + " está acima do IMC ideal, seu IMC: " + IMCs[0]);
                todosOK = false;
            }


        }

        if(todosOK){
            System.out.println("Todos estão no IMC ideal!");
        }
    }

}

package questao.quatro;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        inicio();

        textoLeitor("Digite a cotação de Dollar pra Real hoje: ");
        float cotacaoDolarReal = leitorValores();
        System.out.println(cotacaoDolarReal);

        textoLeitor("Digite o valor em Real para converter: ");
        float real = leitorValores();
        float dolar = realParaDolar(real, cotacaoDolarReal);

        imprimeResultadoCambio(real,dolar);
    }

    public static float realParaDolar(float real, float cotacaoDolarReal) {
        return real / cotacaoDolarReal;
    }

    public static float leitorValores(){

        Scanner leitor = new Scanner(System.in);
        float valor = leitor.nextFloat();
        return valor;
    }

    public static void textoLeitor(String texto){
        System.out.print(texto);
    }

    public static void inicio(){
        System.out.println("Bem vindo ao conversor de Dollar para Real");
    }

    public static void imprimeResultadoCambio(float real, float dolar){
        System.out.printf("R$ %.2f equivalem a US$ %.2f", real, dolar);
    }
}

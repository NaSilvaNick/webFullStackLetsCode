package questao.tres;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        inicio();

        textoLeitor("Digite a temperatura em graus celsius: ");
        float celsius = leitorTemperatura();
        float fahrenheit = celciusParaFahrenheit(celsius);

        imprimeResultadoConversao(celsius,fahrenheit);

    }

    public static float celciusParaFahrenheit(float celsius) {

        final float FAOTR_CONVERSAO_FAHRENHEIT = 18f;
        final float VARIACAO_FAHRENHEIT = 32f;

        return (celsius * FAOTR_CONVERSAO_FAHRENHEIT) + VARIACAO_FAHRENHEIT;
    }

    public static float leitorTemperatura(){
        Scanner leitor = new Scanner(System.in);
        float temperatura = leitor.nextFloat();
        leitor.close();
        return temperatura;
    }

    public static void textoLeitor(String texto){
        System.out.print(texto);
    }

    public static void inicio(){
        System.out.println("Bem vindo ao conversor de Celcius para Fahrenheit");
    }

    public static void imprimeResultadoConversao(float celsius, float farenheit){
        System.out.printf("%.1fºC são equivalentes a %.1fºF", celsius, farenheit);
    }
}

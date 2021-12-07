package questao.cinco;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        inicio();

        textoLeitor("Digite a medida em polegadas: ");
        float polegadas = leitorMedidas();
        float centimetros = polegadasParaCentimetros(polegadas);

        imprimeResultadoConversao(polegadas,centimetros);

    }

    public static float polegadasParaCentimetros(float polegadas) {

        final float FATOR_CONVERSAO_CENTIMETRO = 2.540f;
        return polegadas * FATOR_CONVERSAO_CENTIMETRO;
    }

    public static float leitorMedidas(){

        Scanner leitor = new Scanner(System.in);
        float valor = leitor.nextFloat();
        leitor.close();
        return valor;
    }

    public static void textoLeitor(String texto){
        System.out.print(texto);
    }

    public static void inicio(){
        System.out.println("Bem vindo ao conversor de Polegadas para Centímetros");
    }

    public static void imprimeResultadoConversao(float polegadas, float centimetros){
        System.out.printf("%.2f polegada são equivalentes a %.2f centímetros", polegadas, centimetros);
    }
}
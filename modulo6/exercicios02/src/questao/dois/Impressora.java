package questao.dois;

public class Impressora {

    public static void iniciar(){
        System.out.println("Bem vindo a impressora de Tabuadas.");
        System.out.print("Para começar ");
    }

    public static void textoLeitor(String texto){
        System.out.print(texto);
    }

    public static void imprimeTabuadaSoma(int numero){

        int fator = 0;

        System.out.println(numero +  " + " + fator + " = " + Calculadora.soma(numero,fator++));
        System.out.println(numero +  " + " + fator + " = " + Calculadora.soma(numero,fator++));
        System.out.println(numero +  " + " + fator + " = " + Calculadora.soma(numero,fator++));
        System.out.println(numero +  " + " + fator + " = " + Calculadora.soma(numero,fator++));
        System.out.println(numero +  " + " + fator + " = " + Calculadora.soma(numero,fator++));
        System.out.println(numero +  " + " + fator + " = " + Calculadora.soma(numero,fator++));
        System.out.println(numero +  " + " + fator + " = " + Calculadora.soma(numero,fator++));
        System.out.println(numero +  " + " + fator + " = " + Calculadora.soma(numero,fator++));
        System.out.println(numero +  " + " + fator + " = " + Calculadora.soma(numero,fator++));
        System.out.println(numero +  " + " + fator + " = " + Calculadora.soma(numero,fator++));
        System.out.println(numero +  " + " + fator + " = " + Calculadora.soma(numero,fator));
    }

    public static void imprimeTabuadaSubtracao(int numero){

        int fator = 0;

        System.out.println(numero +  " - " + fator + " = " + Calculadora.subtracao(numero,fator++));
        System.out.println(numero +  " - " + fator + " = " + Calculadora.subtracao(numero,fator++));
        System.out.println(numero +  " - " + fator + " = " + Calculadora.subtracao(numero,fator++));
        System.out.println(numero +  " - " + fator + " = " + Calculadora.subtracao(numero,fator++));
        System.out.println(numero +  " - " + fator + " = " + Calculadora.subtracao(numero,fator++));
        System.out.println(numero +  " - " + fator + " = " + Calculadora.subtracao(numero,fator++));
        System.out.println(numero +  " - " + fator + " = " + Calculadora.subtracao(numero,fator++));
        System.out.println(numero +  " - " + fator + " = " + Calculadora.subtracao(numero,fator++));
        System.out.println(numero +  " - " + fator + " = " + Calculadora.subtracao(numero,fator++));
        System.out.println(numero +  " - " + fator + " = " + Calculadora.subtracao(numero,fator++));
        System.out.println(numero +  " - " + fator + " = " + Calculadora.subtracao(numero,fator));
    }

    public static void imprimeTabuadaMultiplicacao(int numero){

        int fator = 0;

        System.out.println(numero +  " x " + fator + " = " + Calculadora.multiplicacao(numero,fator++));
        System.out.println(numero +  " x " + fator + " = " + Calculadora.multiplicacao(numero,fator++));
        System.out.println(numero +  " x " + fator + " = " + Calculadora.multiplicacao(numero,fator++));
        System.out.println(numero +  " x " + fator + " = " + Calculadora.multiplicacao(numero,fator++));
        System.out.println(numero +  " x " + fator + " = " + Calculadora.multiplicacao(numero,fator++));
        System.out.println(numero +  " x " + fator + " = " + Calculadora.multiplicacao(numero,fator++));
        System.out.println(numero +  " x " + fator + " = " + Calculadora.multiplicacao(numero,fator++));
        System.out.println(numero +  " x " + fator + " = " + Calculadora.multiplicacao(numero,fator++));
        System.out.println(numero +  " x " + fator + " = " + Calculadora.multiplicacao(numero,fator++));
        System.out.println(numero +  " x " + fator + " = " + Calculadora.multiplicacao(numero,fator++));
        System.out.println(numero +  " x " + fator + " = " + Calculadora.multiplicacao(numero,fator));
    }

    public static void imprimeTabuadaDivisao(int numero){

        int fator = 1;

        System.out.println(numero +  " / " + fator + " = " + Calculadora.divisao(numero,fator++));
        System.out.println(numero +  " / " + fator + " = " + Calculadora.divisao(numero,fator++));
        System.out.println(numero +  " / " + fator + " = " + Calculadora.divisao(numero,fator++));
        System.out.println(numero +  " / " + fator + " = " + Calculadora.divisao(numero,fator++));
        System.out.println(numero +  " / " + fator + " = " + Calculadora.divisao(numero,fator++));
        System.out.println(numero +  " / " + fator + " = " + Calculadora.divisao(numero,fator++));
        System.out.println(numero +  " / " + fator + " = " + Calculadora.divisao(numero,fator++));
        System.out.println(numero +  " / " + fator + " = " + Calculadora.divisao(numero,fator++));
        System.out.println(numero +  " / " + fator + " = " + Calculadora.divisao(numero,fator++));
        System.out.println(numero +  " / " + fator + " = " + Calculadora.divisao(numero,fator));
    }
}

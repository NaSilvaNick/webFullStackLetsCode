package questao.um;

public class Impressora {

    public static void textoLeitor(String texto){
        System.out.print("Por favor, " + texto + ": ");
    }

    public static void imprimeSoma(float primeiroValor, float segundoValor){

        float resultado = Calculadora.soma(primeiroValor,segundoValor);
        System.out.println(primeiroValor + " + " + segundoValor + " = " + resultado);
    }

    public static void imprimeSubtracao(float primeiroValor, float segundoValor){

        float resultado = Calculadora.subtracao(primeiroValor,segundoValor);
        System.out.println(primeiroValor + " - " + segundoValor + " = " + resultado);
    }

    public static void imprimeMultiplicacao(float primeiroValor, float segundoValor){

        float resultado = Calculadora.multiplicacao(primeiroValor,segundoValor);
        System.out.println(primeiroValor + " x " + segundoValor + " = " + resultado);
    }

    public static void imprimeDivisao(float primeiroValor, float segundoValor){

        float resultado = Calculadora.divisao(primeiroValor,segundoValor);
        System.out.println(primeiroValor + " / " + segundoValor + " = " + resultado);
    }

    public static void imprimeCalculos(float primeiroValor, float segundoValor){

        System.out.println("Imprimindo calculos...");
        System.out.println("Calculos:");
        imprimeSoma(primeiroValor,segundoValor);
        imprimeSubtracao(primeiroValor,segundoValor);
        imprimeMultiplicacao(primeiroValor,segundoValor);
        imprimeDivisao(primeiroValor,segundoValor);
    }
}

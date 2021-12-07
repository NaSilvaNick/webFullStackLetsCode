package questao.dois;

public class Main {

    public static void main(String[] args) {

        Impressora.iniciar();
        Impressora.textoLeitor("digite um numero para imprimir a tabuada: ");
        int numero = Leitor.numero();

        Impressora.textoLeitor("qual operação você gostaria de imprimir?");
        Impressora.textoLeitor("[ SOMA , SUBTRACAO , MULTIPLICACAO , DIVISAO ]: ");
        TipoTabuada operacao = Leitor.operacao();

        Leitor.fecharLeitor();

        switch (operacao) {
            case SOMA :
                Impressora.imprimeTabuadaSoma(numero);
                break;
            case SUBTRACAO:
                Impressora.imprimeTabuadaSubtracao(numero);
                break;
            case MULTIPLICACAO:
                Impressora.imprimeTabuadaMultiplicacao(numero);
                break;
            case DIVISAO:
                Impressora.imprimeTabuadaDivisao(numero);
                break;
            default :
                System.out.println("Operação inválida!");
                break;
        }
    }
}

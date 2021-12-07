package questao.um;

public class Main {

    public static void main(String[] args) {

        Impressora.textoLeitor("digite o primeiro valor");
        float primeiroValor = Leitor.numero();

        Impressora.textoLeitor("digite o segundo valor");
        float segundoValor = Leitor.numero();

        Leitor.fecharLeitor();5

        Impressora.imprimeCalculos(primeiroValor,segundoValor);
    }
}

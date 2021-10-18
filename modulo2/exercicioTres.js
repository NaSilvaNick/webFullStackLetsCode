const ModuloCalculadora = (function(){

    const _dados = []
    const _historico = new Map()
    let _tipoDado = 0 // 0(zero): Para numeros | 1(um): Para operador
    let _calculo = ''

    const _operacoes = {
        '+': {calc: (primeiroValor,segundoValor) => primeiroValor + segundoValor},
        '-': {calc: (primeiroValor,segundoValor) => primeiroValor - segundoValor},
        '*': {calc: (primeiroValor,segundoValor) => primeiroValor * segundoValor},
        '/': {calc: (primeiroValor,segundoValor) => primeiroValor / segundoValor}
    }

    const _montaCalculo = ([primeiroValor,operador,segundoValor]) => {
        return {
            primeiroValor: Number(primeiroValor),
            segundoValor: Number(segundoValor),
            operador,
            resultado: _operacoes[operador].calc(primeiroValor,segundoValor)
        }
    }

    const _validaNumero = (dado) => { // 0 1 2 3 4 5 6 7 8 9
        return Number(dado) ? _tipoDado = 1 : false
    }

    const _validaOperador = (dado) => { // + - * /
        for (const operacao of Object.keys(_operacoes)){
            if(dado == operacao) {
                _tipoDado = 0
                return true
            }
        }
        return false
    }

    const _validaEntradaDado = (dado) => {
        return _tipoDado ? _validaOperador(dado) : _validaNumero(dado)
    }

    const _iniciarNovoCalculo = () => {
        _tipoDado = 0
        _dados.splice(0,_dados.length)
    }

    const _adicionaAoHistorico = ({primeiroValor,segundoValor,operador,resultado}) => {
        _historico.set(`${primeiroValor} ${operador} ${segundoValor}`,resultado)
    }

    const _exibeErro = (dado) => {
        let tipo = ''
        _tipoDado ? tipo = 'operador' : tipo = 'numero'
        console.log(`Por favor digite um ${tipo} para o calculo! '${dado}' não é um ${tipo}`)
    }

    const enter = (dado) => {

        _validaEntradaDado(dado) ? _dados.push(dado) : _exibeErro(dado)
           
        if (_dados.length == 3) {
            _calculo = _montaCalculo(_dados)
            _adicionaAoHistorico(_calculo)
            _iniciarNovoCalculo()
        }
    }

    const equals = () => {
        return _calculo ? _calculo.resultado : `Sem Resultado`
    }

    const list = () => {

        return _historico.size == 0 ? `Sem operações` : _historico

        // for (const [key, value] of _historico) {
        //     console.log(`${key} => ${value}`)
        // } //// Essa foi a minha primeira saida, porem a função não retornava nada, somente um "console.log"
    }

    const reset = () => {
        _iniciarNovoCalculo()
        _calculo = ''
        _historico.clear()
    }

    return {
        enter,
        equals,
        list,
        reset
    }
})()
// Finalizado


const Calculadora = (function(){

    let _dados = []
    const _historico = new Map()
    let _resultado = 0
    let _operador

    const _operacoes = {
        '+': {calc: (totals,current) => totals + current},
        '-': {calc: (totals,current) => totals - current},
        '*': {calc: (totals,current) => totals * current},
        '/': {calc: (totals,current) => totals / current}
    }

    const _iniciarNovoCalculo = () => {
        _dados = []
    }

    const _adicionaAoHistorico = () => {
        _historico.set(_dados.join(` ${_operador} `),_resultado)
    }

    const _exibeErro = () => {
        console.log('Por favor digite um Número para o calculo!')
    }

    const _calcular = () => {
        return _dados.reduce((totals,current) => _operacoes[_operador].calc(totals,current))
    }

    const _setOperador = operador => {
        _operador = operador
    }

    const _obtemResultado = operador => {
        if(!_operacoes[operador]) return
        
        _setOperador(operador)
        _resultado = _calcular()
        _adicionaAoHistorico()
        _iniciarNovoCalculo()
    }

    const enter = dado => {
        Number(dado) ? _dados = [..._dados,Number(dado)] : _exibeErro()
    }

    const equals = operador => {
        _obtemResultado(operador)
        return _resultado
    }

    const list = () => {
        return _historico
    }

    const reset = () => {
        _iniciarNovoCalculo()
        _historico.clear()
    }

    return {
        enter,
        equals,
        list,
        reset
    }
})()
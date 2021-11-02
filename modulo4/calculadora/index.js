const $ = elemento => document.querySelector(elemento)
const $$ = elemento => document.createElement(elemento)

const entradaInput = $('[data-entrada-input]')
const entradaBtn = $('[data-entrada-btn]')

const resultadoInput = $('[data-resultado-input]')
const resultadoBtn = $('[data-resultado-btn]')

const apaga = $('[historico-apaga]')
const visualiza = $('input[type="checkbox"]')

const lista = $('[data-lista]')

entradaBtn.onclick = () => {
    Calculadora.enter(entradaInput.value)
    entradaInput.value = ''
    entradaInput.focus()
}

const obtemOperador = () => $('input[type="radio"]:checked').value

resultadoBtn.onclick = () => {
    try {
        resultadoInput.value = Calculadora.equals(obtemOperador())
        atualizaHistorico()
    } catch(e) {
        resultadoInput.value = 'Sem resultado'
    }
}

visualiza.onclick = () => toggleVisualiza()

apaga.onclick = () => {
    Calculadora.reset()
    atualizaHistorico()
    lista.appendChild(criaCalc('Sem calculos'))
}

const toggleVisualiza = () => {
    visualiza.checked ? lista.classList.remove('disable') : lista.classList.add('disable') 
}

const atualizaHistorico = () => {
    lista.innerText = ''
    for (const [key, value] of Calculadora.list()) {
        lista.appendChild(criaCalc(`${key} = ${value}`))
    }
}

const criaCalc = (calc) => {

    const li = $$('li')
    const p = $$('p')

    li.classList.add('lista-item')
    p.classList.add('lista-calc')

    p.innerText = calc

    li.appendChild(p)

    return li
}
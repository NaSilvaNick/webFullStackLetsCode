var all = { // Objeto criado para guardar o BOTÃO e a LISTA da sessão ALL
    btn: document.querySelector('[data-btn-all]'), // BOTÃO da sessão ALL
    list: document.querySelector('[data-list-all]') // LISTA da sessão ALL
}

var allSettled = { // Objeto criado para guardar o BOTÃO e a LISTA da sessão ALLSETTLED
    btn: document.querySelector('[data-btn-settled]'), // BOTÃO da sessão ALLSETTLED
    list: document.querySelector('[data-list-settled]') // LISTA da sessão ALLSETTLED
}

var race = { // Objeto criado para guardar o BOTÃO e a LISTA da sessão RACE
    btn: document.querySelector('[data-btn-race]'), // BOTÃO da sessão RACE
    list: document.querySelector('[data-list-race]') // LISTA da sessão RACE
}

var any = { // Objeto criado para guardar o BOTÃO e a LISTA da sessão ANY
    btn: document.querySelector('[data-btn-any]'), // BOTÃO da sessão ANY
    list: document.querySelector('[data-list-any]') // LISTA da sessão ANY
}

all.btn.onclick = e => { // Pegando o CLICK do BOTÃO all e executando a função GENERATELIST
    generateList('all') // Chamando a função GENERATELIST e passando o MÉTODO da Promise : ALL
}

allSettled.btn.onclick = e => { // Pegando o CLICK do BOTÃO allSettled e executando a função GENERATELIST
    generateList('allSettled') // Chamando a função GENERATELIST e passando o MÉTODO da Promise : ALLSETTLED
}

race.btn.onclick = e => { // Pegando o CLICK do BOTÃO race e executando a função GENERATELIST
    generateList('race') // Chamando a função GENERATELIST e passando o MÉTODO da Promise : RACE
}

any.btn.onclick = e => { // Pegando o CLICK do BOTÃO any e executando a função GENERATELIST
    generateList('any') // Chamando a função GENERATELIST e passando o MÉTODO da Promise : ANY
}

const generateList = async type => { // Função assíncrona que busca os arrays na Promise pelo Método(Type)
    try { // Execultando o código assíncrono
        const array = await promiseType(type) // Esperando o RETORNO da Promise, passando o tipo da Promise(type)
        insertInList(array,this[type]) // Após o retorno, insere os Arrays na lista do Document, passando o ARRAY e o Tipo de sessão
    } catch(erro) { // Se houver um ERRO, insere o Erro na lista do Document
        if(type == 'any'){insertInList('Não foi possível gerar o Array',this[type])} // Se for do type: ANY, ele não devolve uma rejeição, então eu passo o mesmo TEXTO
        else {insertInList(erro,this[type])} // Se for os outros tipos insere o erro normalmente
    }
}

const insertInList = (content,type) => { // Recebe o conteúdo e o tipo de sessão
    type.list.innerHTML = '' // Apaga as listas anteriores dentro daquela Sessão
    if(typeof content == 'string'){type.list.appendChild(createListItem(content))} // Se for uma STRING, cria um LIST ITEM e insere na Lista da SESSÃO
    else { content.forEach(cont => // Se for um array de listas, pra cada lista do array 
            type.list.appendChild(createListItem(cont))) // cria um LIST ITEM e insere na Lista da SESSÃO
    }
}

const createListItem = content => { // Recebe um CONTEÚDO, CRIA e RETORNA um ITEM da LISTA
    const li = document.createElement('li') // Cria uma tag LI
    const p = document.createElement('p') // Cria uma tag P
    p.innerText = content // Insere o CONTEÚDO dentro de P
    li.appendChild(p) // Insere P dentro de LI
    return li // Retorna LI
}

const generateNumber = (max,min=1) => Math.round(Math.random() * (max - min) + min) // função que retorna numeros aleatórios com limite MÁXIMO e MÍNIMO

const createArray = length => { // Retorna um ARRAY com numeros aleatórios e o LENGTH recebido 
    const array = new Array(length) // Cria ARRAY com LENGTH recebido
    for(let position = 0; position < array.length; position++){ // Iternado sobre cada posição do ARRAY
        array[position] = generateNumber(320) // Preenchendo cada posição com um numero aleatório de 0 a 320
    }
    return array // Retornando o ARRAY criado
}

const arrayPromise = () => { // Função que retorna uma Promisse nova a cada chamada, pode ser Resolvida ou as vezes Rejeitada
    return new Promise((resolve,reject) => { // A Promise retornada
        setTimeout(() => { // Um Delay no retorno da Promise
            const array = createArray(generateNumber(15,0)) // Cria um ARRAY com um LENTH aleatório de 0 a 15
            
            if(!array.length) reject('Não foi possivel gerar o Array') // Se o lenth do Array for 0(zero), ou seja, um array vazio ele Rejeita
            
            resolve(array) // Se estiver tudo certo ele Resolve passando o ARRAY
        }, generateNumber(2600,800)) // A função gera um tempo de Delay aleatório que pode variar de 800 a 2600 mili segundos
    })
}
    
const promises = () => [arrayPromise(), arrayPromise(), arrayPromise()] // Função que retorna um ARRAY com a CHAMADA de TRÊS Promises ** Isso garante que toda vez que for chamado, uma nova Promise será retornada pra cada chamada **

const promiseType = async type => { // Função Asíncrona que Resolve as Promises com o Type Recebido { all , allSettled , race , any } a(s) lista(s)
    let arrays = await Promise[type](promises()) // Promise que recebe o TYPE e espera o retorna das Promises
        
    if(type == 'all'){return arrays.map(list => list.join(', '))} // Se for Promise.all() retorna as 3 LISTAS convertidas para STRING
    if(type == 'allSettled'){ // Se for Promise.allSettled() retorna as listas convertidas em STRING ou a RAZÃO da Rejeição
        return arrays.reduce((acc,current) => { // Retornado a redução do retorna em uma LISTA com as lista em String ou a RAZÃO da Rejeição 
            if (current.status == 'fulfilled'){ // Se for Resolvida retorna o valor
                return [...acc, current.value.join(', ')] // Insere a LISTA convertida em String
            }
                return [...acc, current.reason] // Insere a Razão da Rejeição
        },[]) // Declarando o ACC como um ARRAY
    }

    return arrays.join(', ') // Se for Promise.race() ou Promise.any() retorna a LISTA convertida para STRING
}
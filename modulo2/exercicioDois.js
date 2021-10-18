const voters = [{name: 'Bob',age: 30,voted: true},{name: 'Jake',age: 32,voted: true},{name: 'Kate',age: 25,voted: false},{name: 'Sam',age: 20,voted: false},{name: 'Phil',age: 21,voted: true},{name: 'Ed' ,age: 55,voted: true},{name: 'Tami',age: 54,voted: true},{name: 'Mary',age: 31,voted: false},{name: 'Becky',age: 43,voted: false},{name: 'Joey',age: 41,voted: true},{name: 'Jeff',age: 30,voted: true},{name: 'Zack',age: 19,voted: false}]

const compute = (voter,totals,range) => {
    return {
        ...totals,
        [range] : {
            votes: voter.voted ? totals[range].votes + 1 : totals[range].votes,
            people: totals[range].people + 1
        }
    }
}

const ageRange = (voter,{minAge,maxAge}) => voter.age >= minAge && voter.age <= maxAge

const ranges = {
    young: {minAge: 18, maxAge: 25},
    mid: {minAge: 26, maxAge: 35},
    old: {minAge: 36, maxAge: 55}
}

const relatorio = voters.reduce(
    (totals,voter) => {

        for (const range of Object.keys(ranges)){
            if(ageRange(voter,ranges[range])){
                return compute(voter,totals,range)
            }
        } 

        return totals // se caso houver futuramente um 'VOTER' com o 'AGE RANGE' fora das regras
    },
    {
        young: { votes: 0, people: 0},
        mid: { votes: 0, people: 0},
        old: { votes: 0, people: 0}
    }
)

console.log(relatorio)

// Finalizado
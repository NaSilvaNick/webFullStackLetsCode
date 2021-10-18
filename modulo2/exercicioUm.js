const clientes = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

console.log(
    clientes
    .map(
        cliente => cliente.age > 18 ? `${cliente.name} can go to the Matrix`: `${cliente.name} is under age`
        )
    )

    // Finalizado
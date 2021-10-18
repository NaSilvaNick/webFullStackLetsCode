class Person {
    
    constructor(firstName,lastName,age,gender,interests){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.gender = gender
        this.interests = interests
    }

    get name(){
        return `${this.firstName} ${this.lastName}`
    }

    get bio(){
        return `${this.firstName} is ${this.age} years old. They like ${[...this.interests, 'and more...'].join(', ')}`
    }
    
    greeting(){
        return `Hi! I'm ${this.firstName}.`
    }

}

class Teacher extends Person {

    constructor(firstName,lastName,age,gender,subject,interests){
        super(firstName,lastName,age,gender,interests)
        this.subject = subject
    }

    greeting(){
        return `Hello. My name is Teacher ${this.lastName}, and I teach ${this.subject}.`
    }
}

class Student extends Person {
    
    constructor(firstName,lastName,age,gender,school,interests){
        super(firstName,lastName,age,gender,interests)
        this.school = school
    }

    greeting(){
        return `Yo! I'm ${this.firstName}. I study at ${this.school}`
    }
}

const Nickolas = new Person(
    'Nickolas','Silva',21,'Masculino',['Programação','Guitarra','Filosofia','JavaScript']
)
const Gabrielle = new Student(
    'Gabrielle','Galvão',21,'Feminino','Unisanta',['Marketing','Cantar','Falar em público','Photoshop']
)
const Murilo = new Teacher(
    'Murilo','Moraes',28,'Masculino','Front-end',['JavaScript','Festa','React','Cerveja','Bruxaria no JavaScript']
)
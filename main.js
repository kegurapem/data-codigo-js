// ES6: asignación de desestructuración--------------------------

//arrays destructuring
let fruits = ['Apple', 'Banana']
let [a, b] = fruits
console.log(a, b)

// Object destricturin
let user = {
    username: 'Kevin',
    age: 34
}

let {username, age} = user
console.log(username, age)


// ES6: spread operator -----------------------------------------

// spread operator
let person = {name: 'kevin', age: 29}
let country = 'PEM'

let data = { ...person, country}

console.log(data)

// rest
function sum(num, ...values) {
    console.log(num)
    console.log(values)
    let suma = num + values[0]
    return suma
}

console.log(sum(10, 15, 20 ,25, 30));


// ES6: object literals -----------------------------------------
function newUser(user, age, country) {
    return {
        user,
        age,
        country
    }
}

console.log(newUser('kevin', 29,'PEM'))

// ES6: promesas -------------------------------------------------
// En JS existen diferentes formas de trabajar el asyncronismo: Callbacks, Promesas y Async/Await

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!!')
        } else {
            reject('Whoooops!!!')
        }
    })
}

anotherFunction()
  .then(response => console.log(response))
  .catch(err => console.log(err))


// PROMESAS YOUTUBE: https://www.youtube.com/watch?v=pHBmmbDQl0o&ab_channel=CodigoMentor -------------------------------------------------

let newPromise = new Promise(function(resolve, reject) {
    let suma = 2 + 6
    if (suma === 8){
        resolve('Correcto!!!')
    } else {
        reject('Error!!!')
    }
})

newPromise.then(function(mensaje){
    console.log(mensaje)
}).catch(function(error){
    console.log(error)
})

// We create a function that return a Promise
// function miPromesa(() => {
//    //     return new Promise(function(resolve, reject) {
// //         let suma = 1 + 7
// //         if (suma === 8){
// //             resolve('Correcto!!!')
// //         } else {
// //             reject('Error!!!')
// //         }
// //     }) 
// })



Mypromesa = () => {
    return new Promise((resolve, reject) => {
        let isHomeworkDone = true
        if (isHomeworkDone === true){
            let phone = {
                color: 'negro',
                brand: 'iphone'
            }
            resolve(phone)
        } else {
            reject('No obtuviste un iPhone')
        }
    })
}

Mypromesa()
    .then((response) => console.log(response))
    .catch((error) => console.log(error))



// ES6: Clases -------------------------------------------------
// 2015 vs6 ecma6

//declarando una clase
class User {
    // constructir
    constructor(name) {
        this.name = name
    }

    // metodos
    speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    } 
}

//instancia de una clase
const newUserKevin = new User('marvin')
console.log(newUserKevin.greeting())

const developer = new User('kevin')
console.log(developer.greeting())


// setters and getters

class OtherUser {
    constructor (name, age) {
        this.name = name
        this.age = age
    }

    speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }

    get uAge() {
        return this.age
    }

    set uAge(n) {
        this.age = n
    }
}

const developerKevin = new OtherUser('kevin', 29)
console.log(developerKevin.uAge)
console.log(developerKevin.uAge = 30)


// ES6: Modulos -------------------------------------------------

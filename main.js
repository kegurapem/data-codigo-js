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
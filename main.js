//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla", 
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
console.log(Object.keys(person3))
console.log(Object.values(person3))

for(let i = 0; i<Objects.keys(person3).length; i++){
    console.log(Objects.values(person3))
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
function PersonB(name, age)
{
    this.name = name
    this.age = age

    // .printInfo method
    this.printInfo = () => {
        return `${this.name} is ${this.age} years old.`
    }
    // .addAge method
    this.addAge = (age) => {
        return `Now ${this.name} is ${this.age + 3} years old`
    }
}
let person_c = new PersonB('Celeste Barrios', 23)
console.log(person_c.printInfo())
let person_d = new Person('Jojo', 7)
console.log(person_d.printInfo())
console.log(person_d.addAge())
//

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const isLength = (string) => {
    return new Promise((resolve, reject) => {
        if(num %2==0){
            resolve(true);
        }
        else{
            reject(false)
        }
    })
}
isLength('hello').then((result) => {
    console.log("Big Word")
}).catch((error) => {
    console.log("not big)")
})

// simple JS object //
let person = {
    name: 'John',
    age: 28,
    fav_color: 'Red'
}
console.log(person['name'])
console.log(person.name)
// Complex JS object //
let person2 = {
    name: "Max",
    age: 30,
    prog_languages: ['JavaScript', 'Python', 'C++', 'Java'],
    fav_color: "Blue",
    teams: [
        {
            baseball: "Chicago White Sox",
            footabll: "Chicago Bears",
            hockey: "Chicago Blackhawks",
            basketball: ["Chicago Bulls", "Chicago Sky"],
            soccer: ["Chicago Fier", "Naperville YellowJacks", "Chicago Sting"]
        },
        {
            baseball: "Toronto Bluejays",
            footabll: "LA Rams",
            baseball: "Milwakee Bucks",
            soccer: ["Manchester United", "Liverpool"]
        }
    ]
}
console.log(person2.prog_languages[0])
console.log(person2.fav_color)
console.log(person2.teams[0].basketball[0])
console.log(person2.teams[1].soccer[1])
// JavaScript object prototype // 
console.log(Object.keys(person2))
console.log(Object.values(person2))
// For Loop over keys
for(let i = 0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i])
}
for(let i = 0; i < Object.values(person2).length; i++){
    console.log(Object.values(person2)[i])
}
// List values from 
for(let i = 0; i < Object.keys(person2).length; i++){
    if(Array.isArray(Object.values(person2)[i])){
        console.log(Object.values(person2)[i])
    }
}
//ES5 Version Object Prototypes
function Car(make, model, year){
    this.make = make
    this.model = model
    this.year = year
    //A method inside of a JS Prototype
    this.printInfo = function(wheels=0, color){
        console.log(`this is a ${this.year}, ${this.make}
        , ${this.model} and has ${wheels} wheels and the color is
        ${this.color}`)
    }
}
let my_car = new Car('Honda','CR-V',2019)
console.log(my_car.printInfo(4,'Gun Metal'))
//Another Prototype using ES6 Methods
function Person(name,age){
    this.name = name
    this.age = age

    this.printInfo = ()=>{
        return `You are ${this.name}, You are ${this.age} old`
    }
}
let new_person = new Person('joel',30)
console.log(new_person.printInfo())

// in-class problem
function Person(name, age){
    this.name = name
    this.age = age
    // .printInfo method
    this.printInfo = () => {
        return `${this.name} is ${this.age} years old`
    }
    // .addAge method
    this.addAge = (age=0) => {
        return `Now ${this.name} is ${this.age + age} years old`
    }
}
let person_a = new Person('Seth Rogen', 40)
console.log(person_a.printInfo())
let person_b = new Person('James Franco', 42)
console.log(person_b.printInfo())
console.log(person_b.addAge(2))
//

// --JavaScript Classes
class Human{
    constructor(name, age, gender){
        this.age = age;
        this.name = name;
        this.gender = gender;
    }
    printInfo(){
        return `Name: ${this.name}\n Age: ${this.age} \n Gender: ${this.gender}`

    }
}
let cely  = new Human('Celeste',23,'F')
console.log(cely.printInfo())

// JS flexibility example
// NaN: Not a Number
function addNums(num, num2){
    console.log(num)
    return num + num2;
}
console.log(addNums())

//Inherit

class Baby extends Human{
    
}
let wilma = new Human('Wilma', 25, 'F')
console.log(wilma.printInfo())
let jon = new Baby('jon',1,'M')
console.log(jon.printInfo())

//--JavaScript Closure --
/* 
A Closure is a self invoking function that only runs once.
It can set a variable(In our case it will be a counter) 
and returns a function expression.

For this example, we will add to a number after the initial call.

This is called a javaScript closure(which is another type if variable)
and this will create a function that will produce a "private variable(s)"*/

let countUp = (function() {
    let counter = 0 //This will be our private variable 
    console.log('Hit')
    return function()  {return counter++}
})()
let addName = (function () {
    let names = []
    console.log('Adding Names')
    return function(name){
        console.log(names)
        return names.push(name)
    }
})()
//Callback in JS
/* Simply put : a callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Def.: In JavaScript, functionans are objects. Because of this, functions
    can take other functions as arguemnts(parameters), abd 
    can return functions by other functions

    Funcitons that do this are called "higher-order functions"
    Any function that is passed as an argument is called a "Callback function"

    ****
    Reason for that is because of the JS Event Loop.
    In a nutshell JS is an event driven language so this means
    that instead of waiting for a response before moving on JS will keep excecuting while 
    listening for other events
    */
   //Basic EX
   function first(){
       console.log(1)
   }
   function second(){
       console.log(2)
   }
   first()
   second()
   //But what happens when we add delay ti execution..

   function first_delay(){
    //Simulation
    setTimeout(function(){
        console.log(1)
    },500)
    }
    function second_delay(){
    console.log(2)
    }
first_delay()
second_delay()
//callback function syntax
function doHomework(subject,callback){
    alert(`Starting my ${subject} homework!`)
    callback();
}
// doHomework('JavaScript',function(){
//     console.log('Done with homework.')
// })
function complete(){
    console.log('Done with hw')
}
doHomework('JavaScript',complete)
// --ES6 Promise based functions
const isEvenNumber = (num) => {
    return new Promise((resolve, reject) => {
        if(num %2==0){
            resolve(true);
        }
        else{
            reject(false)
        }
    })
}

//using a promise .resolver and .catch

isEvenNumber(7).then((result) => {
    console.log('Even Number')
}).catch((error) => {
    console.log('Odd Number')
}) 



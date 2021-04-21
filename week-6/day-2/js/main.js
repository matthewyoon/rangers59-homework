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

function display_food(obj){
    console.log(Object.values(obj))
}

display_food(person3)

/*
Output: (5) [Array(2), "Anything not from Taco bell", "Portillos Burgers", Array(3), Array(1)]
0: (2) ["Deep Dish", "South Side Thin Crust"]
1: "Anything not from Taco bell"
2: "Portillos Burgers"
3: Array(3)
0: "Chocolate"
1: "Vanilla"
2: "Oreo"
length: 3
__proto__: Array(0)
4: Array(1)
0:
culvers: "All of them"
cupids_candies: "Chocolate Malt"
dunkin: "Vanilla"
mcDonalds: "Sham-rock-shake"
oberwise: "Chocolate"
*/

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
function Person(name, gender, age){
    this.name = name;
    this.gender = gender;
    this.age = age;

// Use an arrow to create the printInfo method

    this.printInfo = () => `${this.name} is a ${this.gender} and is ${this.age} years old.`;
    
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    this.addAge = () => this.age = this.age+1
}

let bill = new Person('Bill','Male',30)
let sarah = new Person('Sarah','Female',20)

/*
OUTPUT:
bill.printInfo()
"Bill is a Male and is 30 years old."
sarah.printInfo()
"Sarah is a Female and is 20 years old."
bill.addAge()
31
bill.addAge()
32
bill.addAge()
33
*/

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"

*/

function string_length(str){
    return new Promise( (resolve, reject) => {
        if (str.length > 10) {
            resolve(true);
        } else{
            reject(false)
        }
    })
}

async function async_string_length(str){
    try {
        await string_length(str)
        console.log('big word')
    } catch (reject) {
        console.log('small number')
    }
}

console.log(async_string_length('nevertheless'))
console.log(async_string_length('dog'))


// //CONSOLE OUTPUT:
// Promise {<pending>}
// Promise {<pending>}
// big word
// small number
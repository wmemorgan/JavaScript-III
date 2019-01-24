/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window (Default) Binding: this binds to the global object. It is the default setting.
* 2. Implicit Binding: occurs when dot notation is used to invoke a function. 
Whatever is to the left of the dot becomes the context for ```this``` in the function.
* 3. Explicit Binding: occurs when .call(), .apply(), or .bind() are used on a function.
* 4. New Binding: occurs when building new objects or when explicitly binding an existing function to the object 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function myWinBindFunc () {
  console.log(this)
}
myWinBindFunc()

function myWinBindFuncStrict () {
  'use strict'
  console.log(this)
}
myWinBindFuncStrict() //undefined

// Principle 2
// code example for Implicit Binding
let animal = {
  species: 'dog',
  name: 'Snoopy',
  identify: function () {
    console.log(`${this.name} is a ${this.species}`)
  }
}
animal.identify()

// Principle 3
// code example for New Binding
// Use a 'constructor' which is a function that creates an object
function Person(name) {
  this.name = name,
  this.greeting = function () {
    return `Hello, my name is ${this.name}`
  }
}

let wilfred = new Person('Wilfred')
console.log(wilfred)
console.log(wilfred.greeting())

// Principle 4
// code example for Explicit Binding

//Creating an object from the Person constructor in Principle #3
let george = new Person('George')
console.log(george)
console.log(george.greeting())

//Create an array for demonstration purposes
const hobbies = ['painting', 'scuba diving', 'golf', 'reading', 'cooking']

//Create a function that will use data from the newly created object and array
function introduce (list) {
  return `${this.greeting()}, my hobbies are ${list.map((item, index) => index !== list.length-1 ?' '+ item: ' and ' + item)}.`
}
// Explicity bind the object and array to the introduce function using the .call() method
console.log(introduce.call(george, hobbies))


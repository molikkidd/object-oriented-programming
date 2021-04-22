// Write out factory functions
function House(bedrooms, bathrooms, garage) {
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.garage = garage;
}

// instance of House
const jennyHouse = new House(3, 3, true);
console.log(jennyHouse);


// add a method on the factory function
jennyHouse.__proto__.paintHouse = function() {
    console.log('Jenny paints house');
}

const bobHouse = new House(2, 1, false);
console.log(bobHouse);

// __proto__ allows you to see methods or add methods

// Exercise: 
// Think of an example of a sport, and come up a factory function that has properties
// Add one method to an instance

function Fighter (wins, losses, draws, weight) {
    this.wins = wins;
    this.losses = losses;
    this.draws = draws;
    this.weight = weight;
    this.isChamp = function(boolean) {
        return boolean;
    }
    this.introduction = function() {
        console.log(`Fighter has ${this.wins} wins, they have ${this.losses} losses`);
    }
}

const israelAdesanyaFighter = new Fighter (20, 1, 0, 185); // instance of Fighter
console.log(israelAdesanyaFighter);
console.log(israelAdesanyaFighter.isChamp(true));

// israelAdesanyaFighter.__proto__.isChamp = function() {
//     console.log('Izzy is the champ');
// }

// function Fighter (wins, losses, draws, weight) {
//     this = {
//         wins: wins,
//         losses: losses,
//         draws: draws,
//         isChamp: function() {

//         }
//     };
    
//     return this;
// }

function iPhone(owner, color, size, memory) {
    this.owner = owner;
    this.color = color;
    this.size = size;
    this.memory = memory;

    this.phoneCall = function (phoneNumber) {
        console.log(`Calling ${phoneNumber} ...`);
    }

    this.textMessage = function (contact) {
        console.log(`Texting ${contact} ...`);
    }
}

const shawnIPhone = new iPhone('Shawn', 'black', 'Pro Max', 512);

iPhone.prototype.upgradeSoftware = function() {
    console.log('New software update avaliable');
}

const jakeIPhone = new iPhone('Jake', 'gold', 'Pro', 512);


// Classes
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return "Hello, my name is " + this.name;
    }
}
  
class Student extends Person {
    constructor(name, course) {
      super(name); // inherited from Person
      this.course = course;
    }
    /*
    greet() {
        return "Hello, my name is " + this.name;
    }
    */

    doHomework(assignment) {
        console.log(`Deliverable: ${assignment}`); // temperate literal
    }
}

const bob = new Person('Bob');
console.log(bob.name);
console.log(bob.greet());

const john = new Student('John', 'SEI');


console.log(bob);
console.log(john);


class Parent {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    drive(car) {
        console.log(`${this.name} is driving ${car}`);
    }
}

class Child extends Parent {
    constructor(name, school) {
        super(name);
        this.school = school;
    }

    doHomework(assignment) {
        console.log(`Deliverable: ${assignment}`); // temperate literal
    }
}

const parentOne = new Parent('Sarah', 'LA');
parentOne.name; // console.log
parentOne.location;
parentOne.drive('Mercedes');

const childOne = new Child('Robert', 'LA', 'Private School');
childOne.name;
console.log(childOne.location);
childOne.school;

childOne.drive('Honda') // method that comes from Parent
childOne.doHomework('Physics'); // method is on the class Child

// Create a factory function based on the key/value pairs inside of the array of objects
// add
// Write a function draftPlayer that takes in an array of players (objects)
// and returns an array of objects (each object being a factory function)

const players = [
    // { name: 'Lebron James', ''}
]
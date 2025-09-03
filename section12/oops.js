// inheritance 
// class Vehicle {
//     #name;
//     #color;
//     #door;
//     #tyers;

//     constructor(name, color, door, tyers) {
//         this.#name = name;
//         this.#color = color;
//         this.#door = door;
//         this.#tyers = tyers;
//     }

//     getName() { return this.#name; }
//     getColor() { return this.#color; }
//     getDoor() { return this.#door; }
//     getTyers() { return this.#tyers; }
// }

// class Car extends Vehicle {
//     constructor(name, color, door, tyers, engineCapacity) {
//         super(name, color, door, tyers);
//         this.engineCapacity = engineCapacity;
//     }

//     carInfo() {
//         return `
//         Name: ${this.getName()}
//         Color: ${this.getColor()}
//         Door: ${this.getDoor()}
//         Tyers: ${this.getTyers()}
//         Engine Capacity: ${this.engineCapacity}
//         `;
//     }
// }

// let camry = new Car("camry", "red", 4, 4, "1000cc");
// console.log(camry.carInfo());


// ------------ encapsulation --------------------

// class Person{
//     #name;
//     #age;

//     constructor(name,age){
//         this.#name = name;
//         this.#age = age;
//     }

//     getName(){
//         return this.#name;
//     }

//     getAge(){
//         return this.#age;
//     }

//     setName(name){
//         this.#name = name;
//     }

//     setAge(age){
//         this.#age = age;
//     }
// }

// let athar = new Person();
// athar.setName("athar")
// athar.setAge(19)

// console.log(athar.getName());
// console.log(athar.getAge());



// -------- abstraction ----------------
class Feature {
    #name;
    #leg;
    #wing;
    
    constructor(name, leg, wing) {
        this.#name = name;
        this.#leg = leg;
        this.#wing = wing;
    }

    setLeg(leg) {
        this.#leg = leg;
    }

    setWing(wing) {
        this.#wing = wing;
    }   

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    getLeg() {
        return this.#leg;
    }

    getWing() {
        return this.#wing;
    }
}

class Animal {
    bird(name) {
        console.log(`${name} is a bird`);
    }

    fish(name) {
        console.log(`${name} is a fish`);
    }

    mammal(name) {
        console.log(`${name} is a mammal`);
    }
}

let parrot = new Feature("parrot", 2, 2);
let shark = new Feature("shark", 0, 0);
let dog = new Feature("dog", 4, 0);

let animal = new Animal();

function animalInfoFun(feature) {
    if (feature.getLeg() === 2 && feature.getWing() === 2) {
        animal.bird(feature.getName());
    } else if (feature.getLeg() === 0 && feature.getWing() === 0) {
        animal.fish(feature.getName());
    } else if (feature.getLeg() === 4 && feature.getWing() === 0) {
        animal.mammal(feature.getName());
    } else {
        console.log(`${feature.getName()} is unknown category`);
    }
}

animalInfoFun(parrot); // parrot is a bird
animalInfoFun(shark);  // shark is a fish
animalInfoFun(dog);    // dog is a mammal

class Vehicle {
    #name;
    #color;
    #door;
    #tyers;

    constructor(name, color, door, tyers) {
        this.#name = name;
        this.#color = color;
        this.#door = door;
        this.#tyers = tyers;
    }

    getName() { return this.#name; }
    getColor() { return this.#color; }
    getDoor() { return this.#door; }
    getTyers() { return this.#tyers; }
}

class Car extends Vehicle {
    constructor(name, color, door, tyers, engineCapacity) {
        super(name, color, door, tyers);
        this.engineCapacity = engineCapacity;
    }

    carInfo() {
        return `
        Name: ${this.getName()}
        Color: ${this.getColor()}
        Door: ${this.getDoor()}
        Tyers: ${this.getTyers()}
        Engine Capacity: ${this.engineCapacity}
        `;
    }
}

let camry = new Car("camry", "red", 4, 4, "1000cc");
console.log(camry.carInfo());
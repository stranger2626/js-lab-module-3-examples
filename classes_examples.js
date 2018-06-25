// There are two ways to crate an object in js

// the "old" way
// by creating an empty object
let airplane = {};
// and by defining it's properties later
airplane.model = 'Bell';
airplane.yearOfProduction = 1989;
// console.log(airplane);

// the "new" way, by creating a class and defining a constructor inside
class Vehicle {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }
};
let car = new Vehicle('car', 'black'); // we can create an instance of a Car object with the properties we want it to have by passing them to the constructor
// console.log(car);

// ES6 gives us trhe ability to extend objects using "extends"

class Car extends Vehicle {
    constructor(color, modelName) {
        super('car', color); // this will call the parent class constructor
        this.modelName = modelName;
    }
};

let BMW = new Car('black', 'X5'); // even though we did not pass the type argument we will still have a type property in this object due to it inheriting it from it's parent class;
// console.log(BMW);
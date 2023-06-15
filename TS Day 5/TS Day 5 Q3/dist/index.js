"use strict";
class Car {
    constructor(colour) {
        this.colour = colour;
    }
}
class child extends Car {
    constructor(colour, price) {
        super(colour);
        this.display = () => {
            return `Colour of car is ${this.colour} and Price is ${this.price}`;
        };
        this.price = price;
    }
}
const car1 = new child("Blue", 150000000);
console.log(car1.display());
//# sourceMappingURL=index.js.map
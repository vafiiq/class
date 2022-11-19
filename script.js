"use strict";

class Car {
    constructor(name, country, color, brand) {
        this.name = name,
            this.country = country,
            this.color = color,
            this.brand = brand
        this.allInfo = function () {
            console.log(`name:${this.name} country:${this.country} color:${this.color} brand:${this.brand}`);
        }
    }
}




class Plane extends Car {
    constructor(name, country, color, brand, capacity, speed) {
        super(name, country, color, brand),
            this.capacity = capacity,
            this.speed = speed
    }
}

class Train extends Plane{
    constructor(name, country, color, brand, capacity, speed, length, cost) {
        super(name, country, color, brand, capacity, speed),
        this.length=length,
        this.cost=cost
    }
}

const mercedes = new Car('Mercedes G63', 'Germany', 'Black', 'Mercedes')
console.log(mercedes)
mercedes.allInfo()

const airplane = new Plane('boeing 757', 'US', 'white', 'boeing', '200 ppl', '982 km/h')
console.log(airplane)

const maglev=new Train('Maglev', 'China', 'blue', 'CRRC', '574 ppl', '600 km/h', '153 m', '$55 bln' )
console.log(maglev)
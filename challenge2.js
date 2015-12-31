//create object with function
function Vehicle(condition, capacity, wheels, model){ //constructor
    this.condition = condition;
    this.capacity = capacity;
    this.wheels = wheels;
    this.model = model;
}

Vehicle.prototype.move = function(){
    console.log('vroooom!');
};
Vehicle.prototype.stop = function(){
    console.log('screeeech!');
};

var bike = new Vehicle('new', 1, 2, 'Bikinator');
var car = new Vehicle('used', 5, 4, 'Chevy Malibu');
var truck = new Vehicle('dead', 2, 8, 'Big Truck');

console.log('bike', bike);
console.log('car', car);
console.log('truck', truck);

function Bike(condition, model, gears){
    Vehicle.call(this, condition, 1, 2, model); //steal or inherit vehicle constructor
    this.gears = gears;
}
Bike.prototype = new Vehicle();
Bike.prototype.move = function(){
    console.log('squeak!!!');
};
var myBike = new Bike('old', 'Target Special', 67);
console.log(myBike);
myBike.move();

function Car(condition, capacity, model, mpg){
    Vehicle.call(this, condition, capacity, 4, model); //steal or inherit vehicle constructor
    this.mpg = mpg;
}
Car.prototype = new Vehicle();
var myCar = new Car('new', 5, 'Malibu', 32);
console.log(myCar);
myCar.move();

function CommercialTruck(condition, capacity, model, mpg){ //steal or inherit car constructor
    Car.call(this, condition, capacity, model, mpg);
    this.wheels = 18; //override wheels from car constructor
}
CommercialTruck.prototype = new Car();
CommercialTruck.prototype.move = function(){
    console.log('CLUNK!!!');
};
CommercialTruck.prototype.openDoor = function(){
    Bike.prototype.move.call(this); //steal bike prototype for open sound
};
var myTruck = new CommercialTruck('used', 2, 'Really Big Truck', 26);
console.log(myTruck);
myTruck.move();
myTruck.openDoor();

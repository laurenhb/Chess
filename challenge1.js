//object literal
var oBike = {
    move: function(){
        console.log('vroooom!');
    },
    stop: function(){
        console.log('screeeech!');
    }
};
console.log('oBike:', oBike);

//invoke object function
var fBike = new Objects();
fBike.move = function(){
    console.log('vroooom!');
};
fBike.stop = function(){
    console.log('screeeech!');
};
console.log('fBike:', fBike);

//create an object with a function
function Vehicle(){}
Vehicle.prototype.move = function(){
    console.log('vroooom!');
};
Vehicle.prototype.stop = function(){
    console.log('screeeech!');
};
var bike = new Vehicle();
console.log('bike', bike);

// challenge1
function List(){}
List.prototype.size = 0;
List.prototype.add = function(el){
    this[this.size] = el;
    this.size++;
    console.log(this);
};
List.prototype.remove = function(index){
    // delete this[index];
    for (var i = index; i < this.size; i++){
        if(this[i+1]){
            this[i] = this[i+1];
        }else{
            delete this[i];
        }
    }
    this.size--;
    console.log(this);
};
List.prototype.reverse = function(){
    for (var i=0, temp; i< Math.floor(this.size / 2); i++){
        temp = this[this.size-1-i];
        this[this.size-1-i] = this[i];
        this[i] = temp;
    }
    console.log(this);
};
var myList = new List();

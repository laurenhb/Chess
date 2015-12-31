function Pokemon(poketype, level, hp, trainer){
    this.poketype = poketype;
    this.level = level;
    this.hp = hp;
    this.trainer = trainer;
}

Pokemon.prototype.battle = function(){
    console.log('let\'s battle!!');
};
Pokemon.prototype.stop = function(){
    console.log('great battle, good job!');
};

var pikachu = new Pokemon('Electric', 10, 35, 'Ash');
var meowth = new Pokemon('Normal', 5, 40, 'Team Rocket');
var staryu = new Pokemon('Water', 14, 30, 'Misty');

console.log('pikachu', pikachu);
console.log('meowth', meowth);
console.log('staryu', staryu);

function ElectricType(level, hp, trainer){
    Pokemon.call(this, 'Electric', level, hp, trainer);
    this.pros = 'Fire, Ground, Rock';
    this.cons = 'Water, Grass, Dragon';
}
ElectricType.prototype = new Pokemon();

function NormalType(level, hp, trainer){
    Pokemon.call(this, 'Normal', level, hp, trainer);
    this.pros = 'none';
    this.cons = 'Rock, Steel, Ghost';
}
NormalType.prototype = new Pokemon();

function WaterType(level, hp, trainer){
    Pokemon.call(this, 'Water', level, hp, trainer);
    this.pros = 'Fire, Ground, Rock';
    this.cons = 'Water, Grass, Dragon';
}
WaterType.prototype = new Pokemon();

function Pikachu(level, trainer, attack){
    ElectricType.call(this, level, 35, trainer);
}
Pikachu.prototype = new Pokemon();
Pikachu.prototype.attacks = ['Thunder Shock', 'Tail Whip'];
Pikachu.prototype.attack = function(){
    console.log(this.attacks[Math.floor((Math.random() * 2) + 0)]);
};
Pikachu.prototype.battle = function(){
    console.log('Pika pi!!');
};
var myPikachu = new Pikachu(12, 'Ash', 'Thunder Shock');
console.log(myPikachu);
myPikachu.battle();
myPikachu.attack();

function Meowth(level, trainer, attack){
    NormalType.call(this, level, 40, trainer);
}
Meowth.prototype = new Pokemon();
Meowth.prototype.attacks = ['Growl', 'Scratch'];
Meowth.prototype.attack = function(){
    console.log(this.attacks[Math.floor((Math.random() * 2) + 0)]);
};
Meowth.prototype.battle = function(){
    console.log('Meeeeowth, that\'s right!!');
};
Meowth.prototype.runAway = function(){
    console.log('RETREAAAT!!');
};
var myMeowth = new Meowth(10, 'Team Rocket', 'Scratch');
console.log(myMeowth);
myMeowth.battle();
myMeowth.runAway();

function Staryu(level, trainer, attack){
    WaterType.call(this, level, 30, trainer);
}
Staryu.prototype = new Meowth();
Staryu.prototype.attacks = ['Water Gun', 'Tackle'];
Staryu.prototype.attack = function(){
    console.log(this.attacks[Math.floor((Math.random() * 2) + 0)]);
};
Staryu.prototype.battle = function(){
    console.log('Hi-Yah!');
};
Staryu.prototype.lose = function(){
    Meowth.prototype.runAway.call(this);
};
var myStaryu = new Staryu(20, 'Misty', 'Water Gun');
console.log(myStaryu);
myStaryu.battle();
myStaryu.lose();

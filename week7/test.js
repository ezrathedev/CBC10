class Town {
    constructor(city, trees, cars){
        this.city = city;
        this.trees = trees;
        this.cars = cars;
    }
}
const town = new Town ('augusta', 'oak', 100);
console.log(town);
console.log(town.cars, town.trees, town.city);

class City extends Town{
    constructor(doors){
        super(city, trees, cars, doors);
        this.doors = doors;
    }
}
const city = new City('atl', 'red olk', 5000, 4);
console.log(city);
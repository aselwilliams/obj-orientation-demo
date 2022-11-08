let person = {
    'firstName': 'Chandler',
    'lastName':'Bong'
}
let fName ='firstName'

// console.log('Dot Notation', person.firstName)
// console.log('Bracket Notation': person['firstName'])
// console.log('Bracket Notation':)

let meal = {
    appetizer:'Chips & Salsa',
    entree: 'Al Pastor Burrito',
    dessert: ['Churros', 'lava Cake'],
    drink: 'Coke'
}

let {dessert: favDessert, entree, drink} = meal;

console.log(favDessert)
console.log(entree)
console.log(drink)

// let meal2 = {
//     appetizer: meal['appetizer'],
//     favDessert,
//     entree,
//     drink
// }
// console.log(meal2)

let meal2 = {
    appetizer: 'Chips & Salsa',
    entree: 'Al Pastor Burrito',
    dessert: ['ice cream'],
    drink: 'Coke',
};
let meal3 = {
    appetizer: 'Chips & Salsa',
    entree: 'Al Pastor Burrito',
    drink: 'Coke',
};
console.log(meal2)
function giveMeDessert(obj){
    if(obj['dessert']){
        return obj['dessert']
    } else {
        return 'no dessert'
    }
}
console.log(giveMeDessert(meal))
console.log(giveMeDessert(meal2))
console.log(giveMeDessert(meal3))

for(let attribute in person) {
    console.log(`This is the key: ${attribute}`)
}
for(let attribute in person) {
    console.log(`This is the value: ${person[attribute]}`)
}

person.job = 'Engineer';
person['pets'] = ['dog', 'dragon']
console.log(person)

let teams = {
    teamOne: ['ryan', 'alex', 'wyatt', 'tj'],
    teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
    teamThree: ['porter', 'blake', 'june', 'owen'],
    teamFour: ['brian', 'riley', 'ezra', 'jordan'],
    teamFive: ['grey', 'milo', 'mckay', 'leo']
  }
  console.log(teams)
  delete teams.teamFour;
  console.log(teams)

  //Classes
  class Car {
    constructor(make, model, color){
        this.make = make,
        this.model = model,
        this.color = color,
        this.miles = 0
    }
    drive(miles){
        this.miles += miles;
        console.log(`${this.make} increased miles by ${miles}, \n current miles: ${this.miles}`)
    }
  }
  let myCar = new Car('Tesla', 'Model Y', 'black');
  let yourCar = new Car('Toyota', 'Highlander', 'silver');
  myCar.drive(30)
  yourCar.drive(45)
  myCar.drive(10)

  console.log(myCar)
  console.log(yourCar)

  class Truck extends Car {
    constructor(make, model, color, payload){
        super(make, model, color)
        this.payload = payload;
    }
    tow(weight){
        if(weight > this.payload){
            console.log('Max payload exceeded')
        }else {
            console.log('Towing successful')
        }
    }
  }
  let truck = new Truck('Ford', 'F450', 'black', 100);

  console.log(truck)
  truck.drive(15)
  truck.tow(90)
  truck.tow(101)
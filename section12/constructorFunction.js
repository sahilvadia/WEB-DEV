 function Car(brand,name){
    this.brand = brand;
    this.name = name;
 }

//  let toyota = new Car("toyota","corolla");
//  let toyota1 = new Car("toyota","camry");
//  console.log(toyota);
//  console.log(toyota1);

 Car.prototype.sound = function (params) {
    return `${params} make a sound`
 }

let toyota = new Car("toyota","corolla");
console.log(toyota.sound(toyota.name));

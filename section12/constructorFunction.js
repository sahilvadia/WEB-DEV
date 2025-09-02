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
// console.log(toyota.sound(toyota.name));



class Vehicle{

   constructor(name,tyers,color,door){
      this.name = name;
      this.tyers = tyers;
      this.color = color;
      this.door = door;
   }

   start(){
      return `${this.name} engine started`
   }

   stop(){
      return `${this.name} engine stopped`
   }

   carInfo(){
      return `
      Car : ${this.name}
      Tyers : ${this.tyers}
      Color : ${this.color}
      Door : ${this.door} `;
   }

}

let camry = new Vehicle("camry",4,"red",2);
console.log(camry.carInfo());
console.log(camry.start());
console.log(camry.stop());

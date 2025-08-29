// console.log("hello world");
// console.log("test the water");
// let array = ["apple","banana","mango"];
// for(let i=0; i<array.length; i++){
// 	console.log(array[i]);
// }

// let a = 10;
// let qrious = a+"1";
// let x = qrious + a;
// let e = true;
// let z = a+e;
// console.log(typeof x);
// console.log(typeof i);

//
// let numbers = [1,2,3,4,5,6];
// let evenNumber  = [];
////for of loop
//for(const number of numbers){
//	if(number % 2 === 0){
//	evenNumber.push(number);
//	}
//}
//
//console.log(evenNumber);

//for in loop


// let cities = {
// 	"ahmedabad":1200000,
// 	"baroda":30203,
// 	"rajkot":24233
// }

// let largeCity = {}
// console.log(Object.keys(cities));

// it freeze the object
// Object.freeze(cities);
// cities.ahmedabad="20000000";
// console.log(cities);


// for (const city in cities) {
// 	if(cities[city]<200000){
// 		continue
// 	}
// 	largeCity[city] = cities[Object.keys];
// }


// console.log(largeCity)


//for each loop


// let fruits = ["apple","banana","mango","berrys"];
// let fav = [];

// fruits.forEach((fruit) => {
// 	console.log(fruit);
// });


// forEach with function
// note in the function we don't use the break because we are with in function scope
// so you need to use return;

// fruits.forEach(function(fruit) {
// 	if(fruit === "mango"){
// 		return;
// 	}
// 	fav.push(fruit);
// })

// console.log(fav);

// let numbers = [1,2,3,4,5,6,7];
// let doubleNumber = [];
// let i=0;
// for (let index = 0; index < numbers.length; index++) {
// 	if(numbers[index]===4){
// 		continue
// 	}
// 	doubleNumber[i]=numbers[index]*2;
// 	i++;
// }

// console.log(doubleNumber);


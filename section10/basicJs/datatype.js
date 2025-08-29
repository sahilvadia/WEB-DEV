// let name ='luffy';
// console.log(name);

// let array= ["hello","world"];
// let user = {firstname:"john",lastname:"doe"};

// console.log(array);
// console.log(user);

// array of object
// let usernames = [{firstname:"user1",lastname:"doe"},{firstname:"user2",lastname:"john"}]
// let username = "John Doe";
// console.log(username);
// let numbers = 10
// console.log(typeof numbers)

// let number = new Number(10);
// console.log(number);

// console.log(number === numbers);

// console.log(`hello ${username}`);

// const users = {
//  firstname:"hitesh",
//  lastname:"khan"
// }
// users.firstname="imran"
// console.log(users);

// var string = "yea string hai"
// console.log(string);

// let num = true+9;
// console.log(Number(num));

// if(10 <= num){
//     console.log("true");
// }
// else{
//     console.log("flase");

// }

let a = 10;
let b = "10";

console.log(a==b)

// let teaArray = ["black","green","oolang"]
// let copyTea = [...teaArray];
// teaArray.push("herbal")
// console.log(teaArray.slice(2,3));
// console.log(teaArray);
// console.log(copyTea);

// let arr = [1, 2, 3, 4];
// console.log(arr.indexOf(2));

// let sum =0;
// let i =0;
// while (i<=5) {
//     sum+=i;
//     i++;
// }

// console.log(sum)

// let teaCollection = [];
// let tea;

// do {
//   const tea = prompt(`Enter your favourite tea : `);

//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");


let array = ["black","green","oolang","chai","booba"]

for (let i = 0; i < array.length; i++) {
    if(array[i]==="chai"){
        console.log(array[i]+` at the index : ${i}`);
        break;
    }
    
}


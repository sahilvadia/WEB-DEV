// function cook(foodname){
//         console.log("Order accepted");
//         console.log("prepare for your food");
//             if(foodname==="chai"){
//                const ingredients = fetchChaiIngredients();
//                serverOrder(foodname, ingredients);
//             }
//             else{
//                 console.log("not available in menu");
//             }
// }

// function serverOrder(foodname, ingredients) {
//     console.log("your order "+foodname+" is on the way");
//     console.log("ingredients are fetched");   
    
//    for (const ingredientName in ingredients) {
//     console.log(`${ingredientName} : ${ingredients[ingredientName]}`);
//    }
// }

// function fetchChaiIngredients(){

//     console.log("fetching ingredients");

//     return {
//         "suger":"200gm",
//         "milk":"100ml",
//         "tea":"10gm"
//     }
// }



// cook("chai");

// const sum = (a,b) => a+b;
// console.log(sum(10,20));



// higher function
// function makeTea(teaName){
//     return `${teaName} is ready`
// }

// function processOrder(typeofTea) {
//     return typeofTea("indian-tea");
// }

// let order = processOrder(makeTea);
// console.log(order);


let employees = [
    {name:"john doe",
    salary:20000,
    age:24,
    designation:"software engineer"},
    
    {name:"jefry doe",
    salary:30000,
    age:23,
    designation:"social media manager"},

    {name:"hery joe",
    salary:54000,
    age:19,
    designation:"seo manager"},

]


//using for of
function processEmployees(employees){
    for (const employee of employees) {
        if(employee.salary>50000){
            console.log(employee.name);
        }
    }
}

// using for each
function processEmployeesForEach(employees){
    employees.forEach(employee => {
        if(employee.salary>50000){
            console.log(employee.name);
        }
    });
}

processEmployees(employees);
processEmployeesForEach(employees);
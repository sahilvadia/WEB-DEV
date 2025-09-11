const greet = {
    name: "zoro"
}

const deep = JSON.parse(JSON.stringify(greet));

const shallow = Object.create(greet);
shallow.__proto__.name = "hhw"

console.log(greet.name);
// console.log(shallow.name);


deep.__proto__.name = "huhu"
console.log(deep);

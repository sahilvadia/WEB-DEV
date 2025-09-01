let genericCar = {
    tyers : 4,
    headLight : 4,
    door : 4
}

let tesla  = {
    driver : "AI"
}

Object.setPrototypeOf(tesla,genericCar);
// console.log(`tesla `,tesla.__proto__);
console.log(`tesla `,Object.getPrototypeOf(tesla));
console.log(tesla.hashOwn);



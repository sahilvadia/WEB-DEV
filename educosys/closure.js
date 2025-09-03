
function increment(){
    let counter = 0; 

   function inner(){
        counter++;
        console.log(counter);
    }
    return inner;
}

// let update = increment();
// update();
// update();
// update();
// update();
// update();



function update() {
    let a = 0;
    function inner(){
        a++;
        console.log(a);
    }
    return inner;
}

let funCall = update();
funCall();
funCall();
funCall();
funCall();

console.log(funCall);


// closure is function + lexical scope

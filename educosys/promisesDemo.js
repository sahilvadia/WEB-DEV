// ----------- promosies with async await -------------
function Greet(){
    return new Promise((resolve, rejected)=>{
        setTimeout(()=>{
            resolve("hello world");
        },5000);
    });
}

async function login(){
    try{
        const result = await Greet();
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}

// login();


// --------- closure = function + lexican scope ---------
let a = 0;

function counter(){
    a++;
    console.log(a);   
}
// counter();
// counter();
// counter();



// ---------- callbacks --------------
function orderReady(callback){
    setTimeout(() => {
        return callback('order is ready',null);
    }, 2000);

}

function handleData(data,err){
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
}

orderReady(handleData);

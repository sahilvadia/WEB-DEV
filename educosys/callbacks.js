// fetchData = (callback) =>{
//     setTimeout(()=>{
//          let fruite = ["apple", "banana", "orange", "graps", "pineapple"];
//          callback(fruite,null);
//     },5000)
// } 


// function handleData(data,error){

//     if(error){
//         console.error(error);
//     }
//     else{
//         console.log(data);
//     }
// }

// fetchData(handleData);

let arr = [1,2,3,4,5];
let obj = {
    name : "zoro",
    age : 23
};




let arryOfObj = [
    {
        name : "zoro",
        age : 23
    },
    {
        name : "sanji",
        age : 24
    },
    {
        name : "luffy",
        age : 20
    }
]



// event queue
// event loop


// we have event queue in contain multiple opeartion in the queue when you set-timeout 
// for any operation it atlest wait for that time after it wait for the event loop to use it.

// so it might take more time than you set it becuase task in the loop.


carInfo = (callback) => {
    setTimeout(() => {
        let cars = [
        {company: "BMW", model: "X5"},
        {company: "Audi", model: "A4"},
        {company: "Mercedes", model: "C-Class"}
        ];
        callback(cars,null);
    }, 2000);
}

function handleData(data,err){

    if(err){
        // console.error(err);
    }
    else{
        // console.log(data);
    }
}

carInfo(handleData);



// problem with callback 
// callback hell - pyramid of doom

// customerOrder - paymentDone - resturentAccept - notifyDeliveryPartner - deliver
// this is one after another callback issue
// it is not maintanable , readable, error-handling not happen properly and so much with that


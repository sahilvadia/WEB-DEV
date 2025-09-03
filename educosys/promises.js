// promisies - it is object that represent the state.
// 3 state - pending, fullfilled, rejected.


function getDatabyPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("server error");
        }, 2000);
    });
}


// squance synchronize operations.
// getDatabyPromise()
//             .then(result => console.log(result))
//             .catch(error => console.log(error))
//             .finally(() => console.log("finally"));


async function getData(){
    try{
        const result = await getDatabyPromise();
        console.log(result);
    }
    catch(error){
        console.error(error);
    }
    finally{
        console.log("finally");
    }
}

getData();
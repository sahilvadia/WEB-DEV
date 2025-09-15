function debouncing(fn,delay){
    let counter;
    return function(...args){
        clearTimeout(counter);
        counter = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

function search(args){
    console.log(args);
}


// const searchWithDebouncing = debouncing(search,1000);
// searchWithDebouncing("hello world")



function thrrotling(fn,delay){
    let lastCall = 0;
    return function(...args){
        const now = new Date().getTime();
    if(now - lastCall>=delay){
        lastCall = now;
        return fn(...args);
    }
    return;    
    }
}

function sendChatMessage(message){
    console.log(message);
}


const sendMessageSlowMode = thrrotling(sendChatMessage,2000);
sendMessageSlowMode("hello world");
sendMessageSlowMode("hello");


function debounce(func, delay){
    let timeoutId;
    return function(...args){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    }
    
}

const search = (query) =>{
    console.log(`Searching for ${query}`);
}

// search("hello world");

const searchingWithDebounce = debounce(search, 1000);
searchingWithDebounce("hello");
searchingWithDebounce("hello w");
searchingWithDebounce("hello world");
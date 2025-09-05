var a = document.querySelector("h1"); // select elements
a.innerHTML = "DOM MANUPULATION"; // change html
a.style.color = "red"; // change css
a.style.backgroundColor = "black";

// var btn = document.querySelector('.btn');
// btn.addEventListener("click", function(){
//     alert("button clicked");
// })

var flag = false;


function bulbBtnClick(){
    var bulbTop = document.querySelector(".bulbTop");
    var image = document.getElementById("img1");

  
    if(flag == false){
        console.log("in if");
        
        bulbTop.style.backgroundColor = "yellow";
        bulbTop.style.boxShadow = "0 0 100px yellow";


        image.style.visibility = "visible";
                flag = true
    }
    else{
        bulbTop.style.backgroundColor = "lightgray";
        bulbTop.style.boxShadow = "none";
                image.style.visibility = "hidden";

        flag = false
    }
}

// querySelectorAll
var d = document.querySelectorAll("div");
d.forEach((element) =>{
    console.log(element)
})


function cook(foodname){
        console.log("Order accepted");
        console.log("prepare for your food");
            if(foodname==="chai"){
               const ingredients = fetchChaiIngredients();
               serverOrder(foodname, ingredients);
            }
            else{
                console.log("not available in menu");
            }
}

function serverOrder(foodname, ingredients) {
    console.log("your order "+foodname+" is on the way");
    console.log("ingredients are fetched");   
    
   for (const ingredientName in ingredients) {
    console.log(`${ingredientName} : ${ingredients[ingredientName]}`);
   }
}

function fetchChaiIngredients(){

    console.log("fetching ingredients");

    return {
        "suger":"200gm",
        "milk":"100ml",
        "tea":"10gm"
    }
}



cook("chai");
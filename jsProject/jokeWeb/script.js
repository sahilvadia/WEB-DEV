var id = document.querySelector(".id");
var setup = document.querySelector(".setup");
var punchline = document.querySelector(".puchline");
var category = document.querySelector(".category");
var button = document.querySelector(".next");

const nextJoke = async () => {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=twopart");
    const data = await response.json();
    console.log(data);
    id.textContent = data.id;
    setup.textContent = data.setup;
    punchline.textContent = data.delivery;
    category.textContent = data.category;
}



window.onload = function (){
    nextJoke();
    console.log("jock on page load");
    
}

document.getElementById('next').addEventListener('click', function() {
  const button = this;
  const buttonText = button.querySelector('span:not(.spinner)');
  const spinner = button.querySelector('.spinner');

  // Step 1: Add the loading state
  button.classList.add('loading');
  button.disabled = true; // Prevents multiple clicks

  // Step 2: Simulate an async operation (e.g., an API call)
  setTimeout(() => {
    // Step 3: Remove the loading state after the operation is complete
    button.classList.remove('loading');
    button.disabled = false;
    alert('Operation completed!');
  }, 2000); // Wait for 2 seconds to simulate a network request
});
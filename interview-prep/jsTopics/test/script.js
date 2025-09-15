let form = document.getElementById("userForm");
let inputText = document.getElementById("searchText");
let messageContainer = document.getElementById("message-container");


form.addEventListener("submit",(event) => {
    event.preventDefault();
    sendChatMessage(event);
})

function sendChatMessage(){
    const messageText = inputText.value.trim();

}
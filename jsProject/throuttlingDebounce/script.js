const messageInput = document.getElementById("message");
const messageForm = document.getElementById("messageForm");
const messageContainer = document.querySelector(".messages");

const messageInterval = document.querySelector(".timeinterval");



function throttle(func, delay){
 let lastCall = 0;
    return function(...args){
        const now = new Date().getTime();
        if(now - lastCall >= delay){
            lastCall = now;
            return func(...args);
        }
        alert("Slow Mode you are with in the time")
    }
}

const slowMode = throttle(sendChatMessage, messageInterval.value * 1000);

messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    slowMode(event);
});


function sendChatMessage(){

    const messageText = messageInput.value.trim();

    if(messageText){
        const messageElement = document.createElement("div");
        messageElement.textContent = messageText;
        messageElement.style.backgroundColor="black";
        messageElement.style.color="white";
        messageElement.style.padding="4px";
        messageElement.style.borderRadius="5px"
        messageElement.style.width="fit-content";
        messageElement.style.margin="5px";
        messageContainer.appendChild(messageElement);
        messageInput.value = "";
        messageInput.focus();
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }

}

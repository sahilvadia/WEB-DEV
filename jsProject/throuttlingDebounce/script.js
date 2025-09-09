const messageInput = document.getElementById("message");
const messageForm = document.getElementById("messageForm");
const messageContainer = document.querySelector(".messages");

const messageInterval = document.querySelector(".timeinterval");
const slowSendTime = document.querySelector(".slowsend-time");



function throttle(func, delay){
 let lastCall = 0;
    return function(...args){
        const now = new Date().getTime();
        if(now - lastCall >= delay){
            slowSendTime.textContent = "";
            lastCall = now;
            return func(...args);
        }
        alert("Slow Mode you are with in the time")
        slowSendTime.textContent = `You can send next message after ${messageInterval.value} seconds`
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




// Debounce Functionality

const messageInputDebounce = document.getElementById("message-debounce");
const messageFormDebounce = document.getElementById("messageForm-debounce");
const messageContainerDebounce = document.querySelector(".messages-debounce");

function debounce(func, delay){
        let timeoutId;
        return function(...args){
            clearInterval(timeoutId);
            timeoutId = setTimeout(()=>{
                func(...args);
            }, delay);
        }
}

messageInputDebounce.addEventListener("input", debounce(handleInput, 500));

function handleInput(event){
    console.log("User is typing: ", event.target.value);
}

messageFormDebounce.addEventListener("submit", (event) => {
    event.preventDefault();
    sendChatMessageDebounce();
});

function sendChatMessageDebounce(){

    const messageText = messageInputDebounce.value.trim();

    if(messageText){
        const messageElement = document.createElement("div");
        messageElement.textContent = messageText;
        messageElement.style.backgroundColor="black";
        messageElement.style.color="white";
        messageElement.style.padding="4px";
        messageElement.style.borderRadius="5px"
        messageElement.style.width="fit-content";
        messageElement.style.margin="5px";
        messageContainerDebounce.appendChild(messageElement);
        messageInputDebounce.value = "";
        messageInputDebounce.focus();
        messageContainerDebounce.scrollTop = messageContainerDebounce.scrollHeight;
    }

}   
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      return func(...args);
    }
    return;
  };
}

const sendMessageSlowMode = throttle(sendChatMessage, 2000);

function sendChatMessage(message) {
  console.log(message);
}

function delayMessage(times, delay) {
            if (times > 0) {
                sendMessageSlowMode(`hello world ${times}`);

                setTimeout(() => {
                    delayMessage(times - 1, delay);
                }, delay);
            }
        }
// sendMessageSlowMode("hello world");
// sendMessageSlowMode("hello world");
// sendMessageSlowMode("hello world");
// sendMessageSlowMode("hello world");

delayMessage(3,3000);


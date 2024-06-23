#script.js

function verify() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name && phone && email && password) {
        document.getElementById("verification-container").style.display = "none";
        document.getElementById("chat-container").style.display = "block";
    } else {
        alert("Please fill in all fields.");
    }
}

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value;
    if (message.trim() === "") return;

    addMessage("user-message", message);
    userInput.value = "";

    // Simulate a bot response
    setTimeout(() => {
        addMessage("bot-message", "This is a simulated bot response.");
    }, 1000);
}

function addMessage(type, message) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", type);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

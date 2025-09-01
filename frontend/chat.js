    
    
    
    // const chatWindow = document.getElementById("chat-window");
    // const chatInput = document.getElementById("chat-input");
    // const sendBtn = document.getElementById("send-btn");

    // function addMessage(message, isUser = true) {
    //   const msgDiv = document.createElement("div");
    //   msgDiv.className = `flex ${isUser ? "justify-end" : "justify-start"} text-sm`;

    //   const bubble = document.createElement("div");
    //   bubble.className = `${isUser ? "bg-blue-600" : "bg-gray-700"} px-4 py-2 rounded-lg max-w-xs`;
    //   bubble.innerHTML = `
    //     ${message}
    //     <div class="text-[10px] text-gray-400 mt-1">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
    //   `;

    //   msgDiv.appendChild(bubble);
    //   chatWindow.appendChild(msgDiv);

    //   chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll
    // }

    // sendBtn.addEventListener("click", () => {
    //   const message = chatInput.value.trim();
    //   if (message) {
    //     addMessage(message, true); // User message
    //     chatInput.value = "";

    //     // Simulated reply
    //     setTimeout(() => {
    //       addMessage("Got it! 👍", false);
    //     }, 800);
    //   }
    // });

    // chatInput.addEventListener("keypress", (e) => {
    //   if (e.key === "Enter") sendBtn.click();
    // });

    const chatWindow = document.getElementById("chat-window");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(message, isUser = true) {
  const msgDiv = document.createElement("div");
  msgDiv.className = `flex ${isUser ? "justify-end" : "justify-start"} text-sm`;

  const bubble = document.createElement("div");
  bubble.className = `${isUser ? "bg-blue-600" : "bg-gray-700"} px-4 py-2 rounded-lg max-w-xs`;
  bubble.innerHTML = `
    ${message}
    <div class="text-[10px] text-gray-400 mt-1">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
  `;

  msgDiv.appendChild(bubble);
  chatWindow.appendChild(msgDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

sendBtn.addEventListener("click", async () => {
  const message = chatInput.value.trim();
  if (message) {
    addMessage(message, true);
    chatInput.value = "";

    try {
      const res = await fetch("https://hiteshsirpersona-1.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });
      const data = await res.json();
      addMessage(data.reply, false);
    } catch (err) {
      console.error(err);
      addMessage("⚠️ Error connecting to server.", false);
    }
  }
});

chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});

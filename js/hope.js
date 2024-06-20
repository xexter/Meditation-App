// script.js

// loader
window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  preload.classList.add("preload-finish");
});

const menuBtn = document.querySelector(".menu");
const mobileNav = document.querySelector(".mobile-nav");
const links = document.querySelectorAll(".mobile-nav-link");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile-nav-open");
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `fade .5s ease forwards ${index / 7 + 0.5}s`;
    }
  });
  menuBtn.classList.toggle("toggle");
});

// web active
const linkColor = document.querySelectorAll(".nav-link");

function colorLink() {
  linkColor.forEach((l) => l.classList.remove("active"));
  this.classList.add("active");
}
linkColor.forEach((l) => l.addEventListener("click", colorLink));

//tablet-active

const mobileLink = document.querySelectorAll(".mobile-nav-link");
function colorMobileLink() {
  mobileLink.forEach((l) => l.classList.remove("mobile-active"));
  this.classList.add("mobile-active");
}
mobileLink.forEach((l) => l.addEventListener("click", colorMobileLink));

//  mobile/small sz active
const BmobileLink = document.querySelectorAll(".mobile-b-icon");
function activeLink() {
  BmobileLink.forEach((l) => l.classList.remove("mobile-b-active"));
  this.classList.add("mobile-b-active");
}
BmobileLink.forEach((l) => l.addEventListener("click", activeLink));

// voice assistant

let mic = document.getElementById("mic");
let chatareamain = document.querySelector(".chatarea-main");
let chatareaouter = document.querySelector(".chatarea-outer");

var startAudio = new Audio();
var endAudio = new Audio();

startAudio.src = "./sounds/start_speech.ogg";
endAudio.src = "./sounds/end_speech.ogg";

const name = localStorage.getItem("name") || "my friend";

// array of responses
//

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg) {
  let output = "";
  output += `<div class="chatarea-inner user">${usermsg}</div>`;
  chatareaouter.innerHTML += output;
  return chatareaouter;
}

function showchatbotmsg(chatbotmsg) {
  let output = "";
  output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
  chatareaouter.innerHTML += output;
  return chatareaouter;
}

function chatbotvoice(message) {
  const speech = new SpeechSynthesisUtterance();

  const backup = [
  ];
  let finalbackup = backup[Math.floor(Math.random() * backup.length)];
  speech.text = finalbackup;
  // speech.text = "Sorry, I did not understand that.";

  // functions

  // social medias
  function google() {
    window.open("https://www.google.com/");
  }
  function youtube() {
    window.open("https://www.youtube.com/");
  }
  function twitter() {
    window.open("https://www.twitter.com/");
  }
  function instagram() {
    window.open("https://www.instagram.com/");
  }
  function gmail() {
    window.open("https://www.gmail.com/");
  }
  function github() {
    window.open("https://www.github.com/");
  }
  function w3schools() {
    window.open("https://www.w3schools.com/");
  }
  function stackoverflow() {
    window.open("https://www.stackoverflow.com/");
  }
  function facebook() {
    window.open("https://www.facebook.com/");
  }
  function spotify() {
    window.open("https://www.spotify.com/");
  }
  function wikipedia() {
    window.open("https://www.wikipedia.com/");
  }

  // awareness
  function suicide() {
    window.open("https://doh.gov.ph/NCMH-Crisis-Hotline");
  }
  function rape() {
    window.open(
      "https://plan-international.org/philippines/reporting-csec-cases-philippines"
    );
  }

  ///

  function getReadableTime() {
    var d = new Date();
    var hour = d.getHours();
    var isAfterNoon = false;
    if (hour >= 12) {
      isAfterNoon = true;
      if (hour >= 13) {
        hour -= 12;
      }
    }
    hour = hour < 10 ? "0" + hour : hour;
    var minutes =
      d.getMinutes() < 10 ? "0" + d.getMinutes() : "" + d.getMinutes();

    return hour + ":" + minutes + (isAfterNoon ? " PM" : " AM");
  }
// script.js

// Function to handle button click event
document.getElementById('sendButton').addEventListener('click', async function() {
  // Retrieve the value from the input field
  var inputValue = document.getElementById('searchBox').value;

  // Example: Fetching data from API
  const response = await fetch('your_api_endpoint_here', {
      method: 'POST', // Adjust HTTP method as needed
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt: inputValue })
  });

  if (!response.ok) {
      console.error('Failed to fetch data');
      return;
  }

  const data = await response.json();
  const botResponse = data.botResponse; // Replace with actual response data

  // Append user message
  const userMessageContainer = document.createElement('div');
  userMessageContainer.classList.add('user-message');
  const userMessageBubble = document.createElement('div');
  userMessageBubble.classList.add('message-bubble');
  userMessageBubble.textContent = inputValue;
  userMessageContainer.appendChild(userMessageBubble);
  document.getElementById('displayContainer').appendChild(userMessageContainer);

  // Append bot message
  const botMessageContainer = document.createElement('div');
  botMessageContainer.classList.add('bot-message');
  const botMessageBubble = document.createElement('div');
  botMessageBubble.classList.add('message-bubble');
  botMessageBubble.textContent = botResponse;
  botMessageContainer.appendChild(botMessageBubble);
  document.getElementById('displayContainer').appendChild(botMessageContainer);

  // Clear input field
  document.getElementById('searchBox').value = '';
});



const chatInput = document.querySelector("#chat-input");
const sendButton = document.querySelector("#send-btn");
const chatContainer = document.querySelector(".chat-container");
const themeButton = document.querySelector("#theme-btn");
const deleteButton = document.querySelector("#delete-btn");

let userText = null;
const API_KEY = "AIzaSyAzuUg-rFqIW0rutQbAgkdLnXDdkTG8rEU"; // Paste your API key here

const loadDataFromLocalstorage = () => {
    // Load saved chats and theme from local storage and apply/add on the page
    const themeColor = localStorage.getItem("themeColor");

    document.body.classList.toggle("light-mode", themeColor === "light_mode");
    themeButton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";

    const defaultText = `<div class="default-text">
                            <h1>ChatGPT Clone</h1>
                            <p>Start a conversation and explore the power of AI.<br> Your chat history will be displayed here.</p>
                        </div>`

    chatContainer.innerHTML = localStorage.getItem("all-chats") || defaultText;
    chatContainer.scrollTo(0, chatContainer.scrollHeight); // Scroll to bottom of the chat container
}

const createChatElement = (content, className) => {
    // Create new div and apply chat, specified class and set html content of div
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("chat", className);
    chatDiv.innerHTML = content;
    return chatDiv; // Return the created chat div
}

const getChatResponse = async (incomingChatDiv) => {
    const API_URL = "https://api.openai.com/v1/completions";
    const pElement = document.createElement("p");

    // Define the properties and data for the API request
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: userText,
            max_tokens: 2048,
            temperature: 0.2,
            n: 1,
            stop: null
        })
    }

    // Send POST request to API, get response and set the reponse as paragraph element text
    try {
        const response = await (await fetch(API_URL, requestOptions)).json();
        pElement.textContent = response.choices[0].text.trim();
    } catch (error) { // Add error class to the paragraph element and set error text
        pElement.classList.add("error");
        pElement.textContent = "Oops! Something went wrong while retrieving the response. Please try again.";
    }

    // Remove the typing animation, append the paragraph element and save the chats to local storage
    incomingChatDiv.querySelector(".typing-animation").remove();
    incomingChatDiv.querySelector(".chat-details").appendChild(pElement);
    localStorage.setItem("all-chats", chatContainer.innerHTML);
    chatContainer.scrollTo(0, chatContainer.scrollHeight);
}

const copyResponse = (copyBtn) => {
    // Copy the text content of the response to the clipboard
    const reponseTextElement = copyBtn.parentElement.querySelector("p");
    navigator.clipboard.writeText(reponseTextElement.textContent);
    copyBtn.textContent = "done";
    setTimeout(() => copyBtn.textContent = "content_copy", 1000);
}

const showTypingAnimation = () => {
    // Display the typing animation and call the getChatResponse function
    const html = `<div class="chat-content">
                    <div class="chat-details">
                        <img src="images/chatbot.jpg" alt="chatbot-img">
                        <div class="typing-animation">
                            <div class="typing-dot" style="--delay: 0.2s"></div>
                            <div class="typing-dot" style="--delay: 0.3s"></div>
                            <div class="typing-dot" style="--delay: 0.4s"></div>
                        </div>
                    </div>
                    <span onclick="copyResponse(this)" class="material-symbols-rounded">content_copy</span>
                </div>`;
    // Create an incoming chat div with typing animation and append it to chat container
    const incomingChatDiv = createChatElement(html, "incoming");
    chatContainer.appendChild(incomingChatDiv);
    chatContainer.scrollTo(0, chatContainer.scrollHeight);
    getChatResponse(incomingChatDiv);
}

const handleOutgoingChat = () => {
    userText = chatInput.value.trim(); // Get chatInput value and remove extra spaces
    if(!userText) return; // If chatInput is empty return from here

    // Clear the input field and reset its height
    chatInput.value = "";
    chatInput.style.height = `${initialInputHeight}px`;

    const html = `<div class="chat-content">
                    <div class="chat-details">
                        <img src="images/user.jpg" alt="user-img">
                        <p>${userText}</p>
                    </div>
                </div>`;

    // Create an outgoing chat div with user's message and append it to chat container
    const outgoingChatDiv = createChatElement(html, "outgoing");
    chatContainer.querySelector(".default-text")?.remove();
    chatContainer.appendChild(outgoingChatDiv);
    chatContainer.scrollTo(0, chatContainer.scrollHeight);
    setTimeout(showTypingAnimation, 500);
}

deleteButton.addEventListener("click", () => {
    // Remove the chats from local storage and call loadDataFromLocalstorage function
    if(confirm("Are you sure you want to delete all the chats?")) {
        localStorage.removeItem("all-chats");
        loadDataFromLocalstorage();
    }
});

themeButton.addEventListener("click", () => {
    // Toggle body's class for the theme mode and save the updated theme to the local storage 
    document.body.classList.toggle("light-mode");
    localStorage.setItem("themeColor", themeButton.innerText);
    themeButton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";
});

const initialInputHeight = chatInput.scrollHeight;

chatInput.addEventListener("input", () => {   
    // Adjust the height of the input field dynamically based on its content
    chatInput.style.height =  `${initialInputHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If the Enter key is pressed without Shift and the window width is larger 
    // than 800 pixels, handle the outgoing chat
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleOutgoingChat();
    }
});

loadDataFromLocalstorage();
sendButton.addEventListener("click", handleOutgoingChat);


















  // social medias
  if (message.includes("google")) speech = google();
  if (message.includes("youtube")) speech = youtube();
  if (message.includes("twitter")) speech = twitter();
  if (message.includes("instagram")) speech = instagram();
  if (message.includes("github")) speech = github();
  if (message.includes("gmail")) speech = gmail();
  if (message.includes("facebook")) speech = facebook();
  if (message.includes("spotify")) speech = spotify();
  if (message.includes("wikipedia")) speech = wikipedia();
  if (message.includes("w3school")) speech = w3schools();
  if (message.includes("stack overflow")) speech = stackoverflow();

  // time
  if (message.includes("time")) speech.text = "Its " + getReadableTime();

  // awareness
  if (message.includes("suicide")) speech = suicide();
  if (message.includes("kill myself")) speech = suicide();
  if (message.includes("i want to die")) speech = suicide();
  if (message.includes("depression")) speech = suicide();
  if (message.includes("rape")) speech = rape();
  if (message.includes("raped")) speech = rape();

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
  chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult = function (e) {
  let resultIndex = e.resultIndex;
  let transcript = e.results[resultIndex][0].transcript;
  chatareamain.appendChild(showusermsg(transcript));
  chatbotvoice(transcript);
  console.log(transcript);
};
recognition.onend = function () {
  mic.style.background = "#ff3b3b";
  endAudio.play();
};

mic.addEventListener("click", function () {
  mic.style.background = "#39c81f";
  mic.style.boxShadow = "0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3";
  document.querySelector(".show-command").style.display = "block";
  document.querySelector(".skill-list-container").style.display = "none";
  recognition.start();
  console.log("Activated");
  startAudio.play();
});



// Function to handle button click event
function handleSendButtonClick() {
  // Retrieve the value from the input field
  var inputValue = document.getElementById('searchBox').value;

  // Example: Using Google Generative AI API
  const API_KEY = "AIzaSyAzuUg-rFqIW0rutQbAgkdLnXDdkTG8rEU";
  const genAI = new GoogleGenerativeAI(API_KEY);

  const searchBox = document.getElementById("searchBox");
  const sendButton = document.querySelector(".send-button");
  let displayContainer = document.getElementById("displayContainer");
  let count = 1;

  async function run() {
      displayContainer.style.alignItems = "start";

      // Example: Creating a user message
      let divUser = document.createElement("div");
      divUser.style.marginTop = "5px";
      divUser.classList.add("flex", "gap-4");
      divUser.innerHTML = `
          <img class="w-[30px] h-[30px] rounded-full hover:cursor-pointer" src="passport size.png" alt="" sizes="" srcset="">
          <div class="flex justify-center items-center text-white bg-[rgb(30,31,32)] px-[20px] py-[10px] rounded-lg">${searchBox.value}</div>
      `;
      displayContainer.append(divUser);
      const divBotHeight = displayContainer.clientHeight - divUser.clientHeight;
      window.scrollTo(0, divBotHeight);

      // Example: Using Generative AI to get a response
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = searchBox.value;
      searchBox.value = "";

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();

      // Example: Creating a bot message
      const md = window.markdownit();
      let divBot = document.createElement("div");
      divBot.style.display = "flex";
      divBot.style.justifyContent = "center";
      divBot.style.marginTop = "5px";
      divBot.style.marginBottom = "15px";
      divBot.classList.add("flex", "gap-4");

      divBot.innerHTML = `
          <img class="w-[30px] h-[30px] rounded-full hover:cursor-pointer rotate-center" src="gemini_favicon.png" alt="" sizes="" srcset="">
          <div class="text-white bg-[rgb(30,31,32)] px-[20px] py-[10px] rounded-lg">${md.render(text)}</div>
      `;
      displayContainer.append(divBot);

      const divBotHeightNew = displayContainer.clientHeight - divBot.clientHeight;
      window.scrollTo(0, divBotHeightNew);
  }

  // Event listener for send button click
  sendButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (count === 1) {
          displayContainer.innerText = "";
          count++;
      }
      run();
  });

  // Event listener for form submission (optional)
  const formElement = document.getElementById("formElement");
  formElement.addEventListener("submit", (e) => {
      e.preventDefault();
      if (count === 1) {
          displayContainer.innerText = "";
          count++;
      }
      run();
  });
}

// Adding event listener to the send button
document.getElementById('sendButton').addEventListener('click', handleSendButtonClick);

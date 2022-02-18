const socket = io("https://chat-with-friend5.herokuapp.com");

const form = document.getElementById("send-container");
const messageInput = document.getElementById("messageInp");
const messageContainer = document.querySelector(".container");

let outgoing = new Audio('public/sounds/outgoing.mp3');
let incoming = new Audio('public/sounds/incoming.mp3');
let userJoinLeft = new Audio('public/sounds/join-left.mp3');


const append = (message, position) => {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.classList.add("message");
  messageElement.classList.add(position);
  messageContainer.append(messageElement);
};
const modifyUserList = (name) => {
  const messageElement = document.createElement("div");
  messageElement.innerText = name;
  messageElement.classList.add("new-user");
  messageElement.classList.add("middle");
  messageContainer.append(messageElement);
  userJoinLeft.play();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value;
  append(`You: ${message}`, "right");
  socket.emit("send", message);
  messageInput.value = "";
  outgoing.play();
});

const name = prompt("Enter your name to join:");

socket.emit("new-user-joined", name);

socket.on("user-joined", (name) => {
  modifyUserList(`${name} joined the chat`);
  userJoinLeft.play();
});
socket.on("receive", (data) => {
  append(`${data.name}: ${data.message}`, "left");
  incoming.play();
});

socket.on("left", (name) => {
  modifyUserList(`${name} left the chat`);
  userJoinLeft.play();
});

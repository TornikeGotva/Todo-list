"use strict";

const inputField = document.querySelector(".input");
const form = document.getElementById("form");
let taskReveal = document.querySelector(".saved-task");
let todoList = document.querySelector(".list");
let inputValue = document.querySelector(".input");

const data = JSON.parse(localStorage.getItem("todos"));

if (data) {
  data.forEach((data) => {
    addToDo(data);
  });
}

// Submit todo
form.addEventListener("submit", function (e) {
  e.preventDefault();

  addToDo();
});

function addToDo(todo) {
  let inputText = inputField.value;

  if (todo) {
    inputText = todo.text;
  }

  if (inputText) {
    // Add todo
    let li = document.createElement("li");
    li.innerText = inputText;
    todoList.appendChild(li);

    //Complete todo
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    //Remove todo
    li.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      todoList.removeChild(li);
    });

    saveInfo();
  }
}

// Save todo on localStorage
function saveInfo() {
  let todosEl = document.querySelectorAll("li");

  const todos = [];

  console.log(todos);

  todosEl.forEach((todosEl) => {
    todos.push({
      text: todosEl.innerText,
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

saveInfo();

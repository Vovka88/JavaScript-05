const titleEl = document.querySelector(".title");
console.log(titleEl.innerHTML);

const containerEl = document.querySelector(".js-container");
console.log(containerEl.innerHTML);

const newText = "<p>NEW TEXT</p>";
containerEl.insertAdjacentHTML("beforeend", newText);

// 

import headerTpl from ".../templates/header.hbs";
const headerEl = document.querySelector(".header_box");
const headerBox = headerTpl();
headerEl.innerHTML = headerBox;

// const createHeaderEl = (templates, container) => {

// }
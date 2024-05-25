let mainHeadingEl = document.getElementById("main-heading");
mainHeadingEl.textContent = "Fruit World"
mainHeadingEl.style.color = "orange";

let headerEl = document.getElementById("header");
headerEl.style.backgroundColor = "green";
headerEl.style.borderBottom = "3px solid orange"

let basketHeadingEl = document.getElementById("basket-heading");
basketHeadingEl.style.color = "green"

let thanksEl = document.getElementById("thanks");
let pEl = document.createElement("p");
pEl.textContent = "Please visit us again";
thanksEl.append(pEl);

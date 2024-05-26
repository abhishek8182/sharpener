const formEl = document.querySelector("form");
const ulEl = document.querySelector(".fruits");
const liEl = document.querySelectorAll(".fruit");

liEl.forEach((element)=>{
  const btn = document.createElement("button");
  btn.className = "edit-btn";
  btn.innerText ="Edit";

  element.append(btn);
})


formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  //grab input element
  const inputEl = document.getElementById("fruit-to-add");

  //create li tag and adding delete button element 
  const liEl = document.createElement("li");
  liEl.innerHTML = inputEl.value + '<button class="delete-btn">x</button><button class="edit-btn">Edit</button>';

  ulEl.append(liEl);

});

ulEl.addEventListener("click", (e)=>{
  if(e.target.classList.contains('delete-btn')){
    const fruitToDelete = event.target.parentElement;
    ulEl.removeChild(fruitToDelete);
  }
})
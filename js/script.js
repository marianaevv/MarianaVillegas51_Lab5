loadEvents();
function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
}
function submit(e){
  e.preventDefault();
  let item = document.querySelector('input');
  if(item.value != '')
    addItem(item.value);
  item.value = '';
}
function addItem(item){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML =`
  <div class="cont">
  <li class="shop">
  <p class="item"> ${item} </p>
  <button class = "checked" type = "text">Check</button>
  <button class = "delete" type = "text">Delete</button>
  </li></div>  `;
  ul.appendChild(li);
  document.querySelector('.results').style.display = 'block';
}
function removeItem() {
  listItem = document.querySelector(".itemList");
  listItem.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.matches(".delete")) {
      event.target.parentElement.parentElement.remove();
    }
  });
}
function crossItem() {
  listCheck = document.querySelector(".itemList");
  listCheck.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.matches(".checked")) {
      event.target.parentElement.classList.toggle("line");
    }
  });
}
function init() {
  removeItem();
  crossItem();
}
init();
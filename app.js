const button = document.querySelectorAll("button");
const list = document.querySelector("ul");
const dltIcn = document.querySelector(".delete-icon")
const div = document.querySelector(".insert-list");
const sortIcon = document.querySelector(".sort-img");
const error = document.querySelector(".error");
const insBtn = document.querySelector(".insert-button")
const insTxt = document.querySelector(".ins-text")
const insIcn = document.querySelector(".ins-icon")
const deletebtn = document.querySelector(".delete-icon img");
const input = document.querySelector("#textInput");

document.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    addList(event);
  }
});

list.addEventListener("mouseover", function(event){
  event.target.style.backgroundColor = "red"
  event.target.style.transition = "0.5s"
  event.target.style.fontSize = "17px"
})

list.addEventListener("mouseout", function(event){
  event.target.style.backgroundColor = "white"
  event.target.style.transition = "0.5s"
  event.target.style.fontSize = "15.5px"
})
insBtn.addEventListener("mouseover", function(event){
  event.target.style.backgroundColor= "red"
  event.target.style.transition = "0.5s"
  event.target.style.fontSize = "16px"
  
})
insTxt.addEventListener("mouseout", function(event){
  event.target.style.backgroundColor = "#833ae0"
  event.target.style.transition = "0.5s"
  event.target.style.fontSize = "13.5px"
  
})
insIcn.addEventListener("mouseout", function(event){
  event.target.style.backgroundColor = "#aa68fe"
  event.target.style.transition = "0.5s"
  event.target.style.fontSize = "13.5px"
})

button.forEach((item) => {
  item.addEventListener("click", addList);
});

function addList(event) {
  if (input.value != "") {
    let dltbtnnew = document.createElement("button");
    let btnImg = document.createElement("img");
    let li = document.createElement("li");
    btnImg.src = "image/remove.png";
    btnImg.classList.add("delete-img");
    dltbtnnew.classList.add("delete-icon-list");
    li.classList.add("list");
    dltbtnnew.append(btnImg);
    li.innerText = input.value;
    li.append(dltbtnnew);
    list.append(li);
    input.value = "";
    error.style.display = "none";
  } 
  
  else {
    error.style.display = "block";}
  if (list.children.length != 0) {
    div.style.display = "block";
  }
}

deletebtn.addEventListener("mouseover", function(event){
  event.target.style.borderRadius = "71px"
  event.target.style.backgroundColor = "white"
})

list.addEventListener("click", function (event) {
  if (event.target.className === "delete-img") {
    event.target.parentElement.parentElement.remove();
    if (list.children.length != 0) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
      sortIcon.children[0].src = "image/listdown.png";
    }
  }
});

deletebtn.addEventListener("mouseover", buttonOver);
deletebtn.addEventListener("mouseout", mouseOut);
deletebtn.addEventListener("click", (event) => {
  input.value = "";
});
function buttonOver(event) {
  event.target.src = "/image/new.png";
  event.target.style.cursor = "pointer";
  deletebtn.removeEventListener("mouseout", buttonOver);
}
function buttonOut(event) {
  event.target.src = "/image/remove.png";
  deletebtn.removeEventListener("mouseover", buttonOut);
}

list.addEventListener("mouseover", mouseOver);
list.addEventListener("mouseout", mouseOut);
function mouseOver(event) {
  if (event.target.className === "delete-img") {
    event.target.src = "/image/new.png";
    event.target.style.cursor = "pointer";
    event.target.style.backgroundColor = "white"
    event.target.style.borderRadius = "71px"
    event.target.style.border = "none"
    list.removeEventListener("mouseout", mouseOver);
  }
}
function mouseOut(event) {
  if (event.target.className === "delete-img") {
    event.target.src = "/image/remove.png";
    list.removeEventListener("mouseover", mouseOut);
  }
}

sortIcon.addEventListener("click", sortTask);
sortIcon.addEventListener("mouseover", (event) => {
  if (event.target.id === "sortImg") {
    event.target.style.cursor = "pointer";
  }
});

function sortTask(event) {
  if (event.target.id === "sortImg") {
    if (list.children.length != 0) {
      let newDAta = [];
      for (let i = 0; i < list.children.length; i++) {
        newDAta.push(list.children[i].childNodes[0].textContent);
      }
      event.target.src = "image/listdown-hover.png";
      newDAta.sort();
      for (let i = 0; i < list.children.length; i++) {
        list.children[i].childNodes[0].textContent = newDAta[i];
      }
    }
    sortIcon.removeEventListener("click", sortTask);
    sortIcon.addEventListener("click", reverseSortTask);
  }
}
function reverseSortTask(event) {
  if (event.target.id === "sortImg") {
    if (list.children.length != 0) {
      let newDAta = [];
      for (let i = 0; i < list.children.length; i++) {
        newDAta.push(list.children[i].childNodes[0].textContent);
      }
      event.target.src = "image/listup-hover.png";
      newDAta.sort().reverse();
      for (let i = 0; i < list.children.length; i++) {
        list.children[i].childNodes[0].textContent = newDAta[i];
      }
    }
    sortIcon.removeEventListener("click", reverseSortTask);
    sortIcon.addEventListener("click", sortTask);
  }
}

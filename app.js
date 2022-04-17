const btn = document.querySelectorAll("button");
const ul = document.querySelector("ul");
const input = document.querySelector("#textInput");
const div = document.querySelector(".insert-list");
const sortIcon = document.querySelector(".sort-img");
const deletebtn = document.querySelector(".delete-icon img");
const error = document.querySelector(".error");

btn.forEach((item) => {
  item.addEventListener("click", addList);
});
document.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    addList(event);
  }
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
    ul.append(li);
    input.value = "";
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
  if (ul.children.length != 0) {
    div.style.display = "block";
  }
}

ul.addEventListener("click", function (event) {
  if (event.target.className === "delete-img") {
    event.target.parentElement.parentElement.remove();
    if (ul.children.length != 0) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
      sortIcon.children[0].src = "image/listdown.png";
    }
  }
});

deletebtn.addEventListener("mouseover", btnmouseOver);
deletebtn.addEventListener("mouseout", mouseOut);
deletebtn.addEventListener("click", (event) => {
  input.value = "";
});
function btnmouseOver(event) {
  event.target.src = "/image/new.png";
  event.target.style.cursor = "pointer";
  deletebtn.removeEventListener("mouseout", btnmouseOver);
}
function btnmouseOut(event) {
  event.target.src = "/image/remove.png";
  deletebtn.removeEventListener("mouseover", btnmouseOut);
}

ul.addEventListener("mouseover", mouseOver);
ul.addEventListener("mouseout", mouseOut);
function mouseOver(event) {
  if (event.target.className === "delete-img") {
    event.target.src = "/image/new.png";
    event.target.style.cursor = "pointer";
    ul.removeEventListener("mouseout", mouseOver);
  }
}
function mouseOut(event) {
  if (event.target.className === "delete-img") {
    event.target.src = "/image/remove.png";
    ul.removeEventListener("mouseover", mouseOut);
  }
}

sortIcon.addEventListener("click", sortList);
sortIcon.addEventListener("mouseover", (event) => {
  if (event.target.id === "sortImg") {
    event.target.style.cursor = "pointer";
  }
});

function sortList(event) {
  if (event.target.id === "sortImg") {
    if (ul.children.length != 0) {
      let newDAta = [];
      for (let i = 0; i < ul.children.length; i++) {
        newDAta.push(ul.children[i].childNodes[0].textContent);
      }
      event.target.src = "image/listdown-hover.png";
      newDAta.sort();
      for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].childNodes[0].textContent = newDAta[i];
      }
    }
    sortIcon.removeEventListener("click", sortList);
    sortIcon.addEventListener("click", revSortList);
  }
}
function revSortList(event) {
  if (event.target.id === "sortImg") {
    if (ul.children.length != 0) {
      let newDAta = [];
      for (let i = 0; i < ul.children.length; i++) {
        newDAta.push(ul.children[i].childNodes[0].textContent);
      }
      event.target.src = "image/listup-hover.png";
      newDAta.sort().reverse();
      for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].childNodes[0].textContent = newDAta[i];
      }
    }
    sortIcon.removeEventListener("click", revSortList);
    sortIcon.addEventListener("click", sortList);
  }
}

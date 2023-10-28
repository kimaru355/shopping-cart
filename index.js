const addItem = document.querySelector("button");
const list = document.querySelector("#list");
let items = {};
const listItems = document.createElement("ul");

addItem.addEventListener("click", () => {
  let entered = document.querySelector("#item").value;
  if (entered === "") {
    return;
  }
  document.querySelector("#item").value = "";
  itemsLen = Object.keys(items).length;
  items[itemsLen] = entered;
  listItems.appendChild(document.createElement("li"));
  listItems.lastElementChild.appendChild(document.createElement("p"));
  listItems.lastElementChild.firstElementChild.textContent = items[itemsLen];
  listItems.lastElementChild.firstElementChild.style.display = "inline";
  listItems.style.listStyleType = "disc";
  listItems.lastElementChild.style.marginTop = "5px";
  button = document.createElement("button");
  button.textContent = "Delete";
  button.classList.add("delete");
  listItems.lastElementChild.setAttribute("id", `item${itemsLen}`);
  button.style.cssText =
    "background-color: red; margin-left: 20px; padding: 4px; border-radius: 4px;";
  listItems.lastElementChild.appendChild(button);

  list.appendChild(listItems);
  addDelete(listItems.lastElementChild.id);
});

let addDelete = (idToDelete) => {
  let allItems = document.querySelectorAll(".delete");
  let toDelete = document.querySelector(`#${idToDelete}`);
  allItems[allItems.length - 1].addEventListener("click", () => {
    list.firstElementChild.removeChild(toDelete);
  });
};

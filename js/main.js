let checkboxes = document.getElementsByClassName("checkbox");

  for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("click", function() {
    let label = this.parentElement.getElementsByTagName("label")[0];
    if (this.checked) {
      label.classList.add("checked");
    } else {
      label.classList.remove("checked");
    }
  });
}
let button = document.getElementById("myButton");
let list = document.getElementById("myList");

button.addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.classList.add("todo-content-list-item");
  newItem.innerHTML = " <input class=\"custom-checkbox checkbox\" type=\"checkbox\" id=\"list9\" name=\"list9\">\n" +
    "            <label for=\"list9\">\n" +
    "              <div>\n" +
    "                <div class=\"todo-content-list-item-title\">Я новый блок</div>\n" +
    "                <div class=\"todo-content-list-item-subtitle\">я описание нового блока</div>\n" +
    "              </div>\n" +
    "            </label>";
  list.appendChild(newItem);
});

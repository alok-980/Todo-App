let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function (event) {
    if(inp.value == "") {
        event.stopPropagation();
        alert("please enter your task");
    } else {
        let task = document.createElement("li");
        task.innerText = inp.value;

        let dleBtn = document.createElement("button");
        dleBtn.innerText = "delete";
        dleBtn.classList.add("delete");

        task.appendChild(dleBtn);
        ul.appendChild(task);
        inp.value = "";
    }
});

ul.addEventListener("click", function (event) {
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})
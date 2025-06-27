const inputBox = document.getElementById("inputbox");
const Listcontainer = document.getElementById("listcontainer");

function Addtask() {
    if (inputBox.value === '') {
        alert("เขียนอะไรสักอย่าง")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        Listcontainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
}

Listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata()
    }

    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata()
    }
}, false);

function savedata() {
    localStorage.setItem("data", Listcontainer.innerHTML);
}


function showtask(){
    Listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();
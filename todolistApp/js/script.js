const inputBox = document.getElementById("input-box");
const listContiner = document.getElementById("list-container");


function addTask() {
    const task = inputBox.value;
    if (task) {
        const listItem = document.createElement("li");
        listItem.classList.add("list-item");
        listItem.innerHTML = `<i id="checker" class="fa-regular fa-circle-check"></i> ${task}`;
        listContiner.appendChild(listItem);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        listItem.appendChild(span);
        inputBox.value = "";

    } else {
        const alert = document.createElement("h3");
        alert.classList.add("alert");
        alert.innerHTML = "Enter Your Cute Task ⋆｡˚✮⋆";
        listContiner.appendChild(alert);
        setTimeout(() => {
            alert.remove();

        }, 1000);
    }
}

inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }});
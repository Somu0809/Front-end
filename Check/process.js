var opening = document.getElementById("popups");
var everything = document.getElementById("all");
var inputvalue = document.getElementById("taskname");
var empty = document.getElementById("empty");
var delpop = document.getElementById("delete");
var changer = document.getElementById("colorChanger");
var changer1 = document.getElementById("colorChanger1");
var changer2 = document.getElementById("colorChanger2");
var uniqueIdToDelete;

changer.addEventListener("click", function () {
    changer.style.backgroundColor = "white";
    changer.classList.add("white");
    changer1.classList.remove("white");
    changer2.classList.remove("white");

    var allItems = document.querySelectorAll("#empty li");
    allItems.forEach(function (item) {
        item.classList.remove("hidden");
    });
});

changer1.addEventListener("click", function () {
    changer.style.backgroundColor = "transparent";
    changer1.classList.add("white");
    changer.classList.remove("white");
    changer2.classList.remove("white");

    var checkedItems = document.querySelectorAll("#empty li input[type='checkbox']:checked");
    var allItems = document.querySelectorAll("#empty li");
    allItems.forEach(function (item) {
        item.classList.add("hidden");
    });
    checkedItems.forEach(function (item) {
        item.closest("li").classList.remove("hidden");
    });
});

changer2.addEventListener("click", function () {
    changer.style.backgroundColor = "transparent";
    changer.classList.remove("white");
    changer1.classList.remove("white");
    changer2.classList.add("white");

    var uncheckedItems = document.querySelectorAll("#empty li input[type='checkbox']:not(:checked)");
    var allItems = document.querySelectorAll("#empty li");
    allItems.forEach(function (item) {
        item.classList.add("hidden");
    });
    uncheckedItems.forEach(function (item) {
        item.closest("li").classList.remove("hidden");
    });
});

function adding() {
    opening.classList.add("popupsopen");
    everything.classList.add("blurring");
}

function cancel() {
    opening.classList.remove("popupsopen");
    everything.classList.remove("blurring");
    inputvalue.value = "";
}

function addTask() {
    var inputValue = document.getElementById("taskname").value;
    var selection = document.getElementById("selection");
    var selectvalue = selection.options[selection.selectedIndex].text;

    if (inputValue == '') {
        alert("Please enter a value");
        return;
    }

    var uniqueId = "item_" + Math.random().toString(36).substr(2, 9);

    var task = {
        id: uniqueId,
        name: inputValue,
        category: selectvalue,
        checked: false // Default checked status is false
    };

    // Get existing tasks from localStorage or initialize an empty array
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Add the new task to the array
    tasks.push(task);

    // Store the updated tasks array back into localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Call a function to display tasks from localStorage
    displayTasks();

    opening.classList.remove("popupsopen");
    everything.classList.remove("blurring");
    inputvalue.value = "";
}

function displayTasks() {
    // Get tasks from localStorage
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Clear the existing tasks on the UI
    empty.innerHTML = '';

    // Loop through each task and display it on the UI
    tasks.forEach(function (task) {
        renderTask(task);
    });
}

function toggleStrike(itemId) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    var task = tasks.find(function (task) {
        return task.id === itemId;
    });

    if (task) {
        task.checked = !task.checked; // Toggle the checked status
        localStorage.setItem("tasks", JSON.stringify(tasks)); // Update localStorage
    }

    var item = document.getElementById(itemId);
    var pTags = item.querySelectorAll("h1");
    pTags.forEach(function (p) {
        p.classList.toggle("strike");
    });
}

var condel = document.getElementById("confirmdelete");
condel.addEventListener("click", function () {
    if (uniqueIdToDelete) {
        deleteItem(uniqueIdToDelete);
        uniqueIdToDelete = null;
    }
    cancelDelete();
});

document.getElementById("specialdrop").addEventListener("click", function () {
    document.getElementById("category-list").classList.toggle("show");
});

function cancelDelete() {
    delpop.classList.remove("popupsopen");
    everything.classList.remove("blurring");
    inputvalue.value = "";
}

function deleteItem(itemId) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(function (task) {
        return task.id !== itemId;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    var item = document.getElementById(itemId);
    item.parentNode.removeChild(item);
}

document.getElementById("alltask").addEventListener("click", function () {
    displayTasks();
});

document.querySelectorAll("#category-list ul li").forEach(function (categoryItem) {
    categoryItem.addEventListener("click", function () {
        var categoryText = categoryItem.textContent;

        // Retrieve tasks from localStorage
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        // Filter tasks based on the selected category
        var filteredTasks = tasks.filter(function(task) {
            return task.category === categoryText;
        });

        // Clear the existing tasks on the UI
        empty.innerHTML = '';

        // Render the filtered tasks
        filteredTasks.forEach(function(task) {
            renderTask(task);
        });
    });
});

function renderTask(task) {
    var li = document.createElement("li");
    li.id = task.id;

    var radio = document.createElement("input");
    radio.type = "checkbox";
    radio.name = "itemRadio";
    radio.classList.add("one");
    radio.checked = task.checked; // Set the checkbox status
    radio.addEventListener("change", function () {
        toggleStrike(task.id);
    });

    var line = document.createElement("span");
    line.classList.add("line");

    var div = document.createElement("div");
    div.classList.add("text")
    div.id = "div"

    var p1 = document.createElement("h1");
    p1.textContent = task.name;
    p1.classList.add("h1tag")
    if (task.checked) {
        p1.classList.add("strike"); // Add strike class if checked
    }

    var p2 = document.createElement("p");
    p2.textContent = task.category;

    var editButton = document.createElement("button");
    editButton.id = "edit";
    editButton.classList.add("btn1");

    var deleteButton = document.createElement("button");
    deleteButton.id = "delete"
    deleteButton.classList.add("btn2");
    deleteButton.addEventListener("click", function () {
        uniqueIdToDelete = task.id;
        delpop.classList.add("popupsopen");
        everything.classList.add("blurring");
    });

    div.appendChild(p1);
    div.appendChild(p2);

    li.appendChild(radio);
    li.appendChild(line);
    li.appendChild(div);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    document.getElementById("empty").appendChild(li);
}

window.onload = function () {
    displayTasks();
};

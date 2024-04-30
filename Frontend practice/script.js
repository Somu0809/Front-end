var empty = document.getElementById("empty");
var values = document.getElementById("values");
var count = 0;
values.innerHTML = count;

function colorred() {
    empty.style.backgroundColor = "red"
    values.innerHTML = count ++;
}

function colorblue() {
    empty.style.backgroundColor = "blue"
    values.innerHTML = count ++;
}

function change() {

    if (count % 5 == 0) {
        empty.classList.add("circle");
        empty.classList.remove("square")
        values.innerHTML = count ++;
    }
    else if ((count % 5 != 0) && (count % 2 == 0)) {
        empty.classList.add("square");
        empty.classList.remove("circle")
        values.innerHTML = count ++;
    }
    else if (count % 2 != 0) {
        empty.classList.remove("square")
        empty.classList.remove("circle")
        values.innerHTML = count ++;
    }
}

function startover() {
    values.innerHTML = count = 0;
    empty.classList.remove("square")
    empty.classList.remove("circle")
    empty.style.backgroundColor = "black"
}
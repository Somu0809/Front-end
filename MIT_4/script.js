function submitting() {
    var a = document.getElementById("name-box").value;
    var b = document.getElementById("email-box").value;
    var aa = document.getElementById("name-box");
    var bb = document.getElementById("email-box");

    var dummy = localStorage.getItem("storing");

    var storing;

    if (dummy == null) {
        storing = []
    }
    else {
        storing = JSON.parse(dummy);
    }

    storing.push({
        names: a,
        email: b
    })

    dummy = localStorage.setItem("storing", JSON.stringify(storing));










    var li = document.createElement("li")
    var span = document.createElement("span");
    var p = document.createElement("p");
    var btn = document.createElement("button");
    btn.id = "deleting"
    var div = document.createElement("div")

    span.innerHTML = a;
    p.innerHTML = b;
    btn.innerHTML = "Delete"


    div.appendChild(span);
    div.appendChild(p);
    li.appendChild(div);
    li.appendChild(btn);

    document.getElementById("empty").appendChild(li);

    aa.value = ""
    bb.value = ""

}
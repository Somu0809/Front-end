var a = document.getElementById("tap");
var b = document.getElementById("tank");
var c = document.getElementById("flow");

height = 400;
margin = 0;
var value = "off";
var setter = "";
c.style.backgroundColor = "white";

function change() {
    if (value == "off") {
        value = "on"
        a.style.backgroundColor = "green"

        if (height > 0) {
            c.style.backgroundColor = "skyblue"
            var newinterval = setInterval(function () {
                height = height - 1;
                margin = margin + 1;
                b.style.height = height + "px";
                b.style.marginTop = margin + "px";

                if (height == 0 || margin == 400 || setter == "off") {
                    clearInterval(newinterval);
                    setter = "on"
                    a.style.backgroundColor = "red"
                    c.style.backgroundColor = "white";
                }

            }, 50);

        }

    }
    else if (value == "on") {
        value = "off"
        setter = "off"
        c.style.backgroundColor = "white"
        a.style.backgroundColor = "red"
    }
}
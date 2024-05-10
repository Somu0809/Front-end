function checking() {
    var passbox = document.getElementById("passbox").value;
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    var status = document.getElementById("status")

    div1.classList.add("show")
    div2.classList.add("show")
    div3.classList.add("show")


    if (passbox.length < 4) {
        div1.classList.add("first");
        div2.classList.remove("second");
        div3.classList.remove("third");
        status.innerHTML = "Password is Weak"
    }

    if (passbox.length >= 4) {
        for (var i = 0; i < passbox.length; i++) {
            if ((passbox.charAt(i) >= "A" || passbox.charAt(i) <= "Z") || (passbox.charAt(i) >= "a" || passbox.charAt(i) <= "b") || (passbox.chart(i) >= "0") || (passbox.charAt(i) == "!" || "@" || "#" || "$")) {
                div1.classList.add("first");
                div2.classList.add("second");
                div3.classList.add("third");
                status.innerHTML = "Password is Strong"
            }

        }
    }

}
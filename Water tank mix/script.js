var tapButton = document.getElementById("tap");
var water = document.getElementById("water");
var flowing = document.getElementById("flows");
var veswater = document.getElementById("vesselWater");

var height = 250;
var margin = 0;
var tapCondition = "off";
var flow = "";
var vesWaterHeight = 0;

flowing.style.backgroundColor = "white";

function changer1() {

    if (tapCondition == "off") {
        tapCondition = "on"
        tapButton.style.backgroundColor = "green";

        if (height > 0) {
            flowing.style.backgroundColor = "aqua";
            veswater.style.backgroundColor = "aqua";

            var newcondition = setInterval(function () {
                height = height - 1;
                margin = margin + 1;
                water.style.height = height + "px";
                water.style.marginTop = margin + "px";

                vesWaterHeight = vesWaterHeight + 0.2;
                veswater.style.height = vesWaterHeight + "px";

                if (height == 0 || margin == 300 || flow == "off") {
                    flow = "on"
                    clearInterval(newcondition);
                    tapButton.style.backgroundColor = "red";
                    flowing.style.backgroundColor = "white";
                }

            }, 30)
        }
    }
    else if (tapCondition == "on") {
        tapCondition = "off"
        flow = "off";
        tapButton.style.backgroundColor = "red";
        flowing.style.backgroundColor = "white";
    }
}



var tapButton2 = document.getElementById("tap2");
var water2 = document.getElementById("water2");
var flowing2 = document.getElementById("flows2");
var veswater = document.getElementById("vesselWater");

var height2 = 250;
var margin2 = 0;
var tapCondition2 = "off";
var flow2 = "";
var vesWaterHeight = 0;

flowing2.style.backgroundColor = "white";

function changer2() {

    if (tapCondition2 == "off") {
        tapCondition2 = "on"
        tapButton2.style.backgroundColor = "green";

        if (height2 > 0) {
            flowing2.style.backgroundColor = "aqua";
            veswater.style.backgroundColor = "aqua";

            var newcondition = setInterval(function () {
                height2 = height2 - 1;
                margin2 = margin2 + 1;
                water2.style.height = height2 + "px";
                water2.style.marginTop = margin2 + "px";

                vesWaterHeight = vesWaterHeight + 0.2;
                veswater.style.height = vesWaterHeight + "px";

                if (height2 == 0 || margin2 == 300 || flow2 == "off") {
                    flow2 = "on"
                    clearInterval(newcondition);
                    tapButton2.style.backgroundColor = "red";
                    flowing2.style.backgroundColor = "white";
                }

            }, 30)
        }
    }
    else if (tapCondition2 == "on") {
        tapCondition2 = "off"
        flow2 = "off";
        tapButton2.style.backgroundColor = "red";
        flowing2.style.backgroundColor = "white";
    }
}



var tapButton3 = document.getElementById("tap3");
var water3 = document.getElementById("water3");
var flowing3 = document.getElementById("flows3");
var veswater = document.getElementById("vesselWater");

var height3 = 250;
var margin3 = 0;
var tapCondition3 = "off";
var flow3 = "";
var vesWaterHeight = 0;

flowing3.style.backgroundColor = "white";

function changer3() {

    if (tapCondition3 == "off") {
        tapCondition3 = "on"
        tapButton3.style.backgroundColor = "green";

        if (height3 > 0) {
            flowing3.style.backgroundColor = "aqua";
            veswater.style.backgroundColor = "aqua";

            var newcondition = setInterval(function () {
                height3 = height3 - 1;
                margin3 = margin3 + 1;
                water3.style.height = height3 + "px";
                water3.style.marginTop = margin3 + "px";

                vesWaterHeight = vesWaterHeight + 0.2;
                veswater.style.height = vesWaterHeight + "px";

                if (height3 == 0 || margin3 == 300 || flow3== "off") {
                    flow3 = "on"
                    clearInterval(newcondition);
                    tapButton3.style.backgroundColor = "red";
                    flowing3.style.backgroundColor = "white";
                }

            }, 30)
        }
    }
    else if (tapCondition3 == "on") {
        tapCondition3 = "off"
        flow3 = "off";
        tapButton3.style.backgroundColor = "red";
        flowing3.style.backgroundColor = "white";
    }
}
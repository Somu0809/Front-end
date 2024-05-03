var ans = document.getElementById("ans");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var next = document.getElementById("next");


one.addEventListener("click", function(){
    ans.innerHTML = "1";
})

two.addEventListener("click", function(){
    ans.innerHTML = "2";
})

three.addEventListener("click", function(){
    ans.innerHTML = "3";
})

four.addEventListener("click", function(){
    ans.innerHTML = "4";
})

five.addEventListener("click", function(){
    ans.innerHTML = "5";
})


function Submitting(){
    next.classList.add("popup")
}
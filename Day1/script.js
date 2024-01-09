let buttons = document.querySelectorAll(".buttons span");
let value = document.getElementById("value");
let toggleBtn = document.querySelector(".toggleBtn");
let body = document.querySelector("body");

buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        if (this.innerHTML === "=") {
            value.innerHTML = eval(value.innerHTML);
        } else if (this.innerHTML === "Clear") {
            value.innerHTML = "";
        } else {
            value.innerHTML += this.innerHTML;
        }
    });
});

toggleBtn.onclick = function () {
    body.classList.toggle("dark");
};

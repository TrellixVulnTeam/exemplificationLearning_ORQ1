const body = document.querySelector("body");
const buttons = document.querySelectorAll("button");

function makeRandomColor(object) {
    object.addEventListener("click", function() {
        let color = "rgb(" + Math.round(Math.random() * 255) + ", " + Math.round(Math.random() * 255) + ", " + Math.round(Math.random() * 255) + ")";
        this.style.backgroundColor = color;
        let color2 = "rgb(" + Math.round(Math.random() * 255) + ", " + Math.round(Math.random() * 255) + ", " + Math.round(Math.random() * 255) + ")";
        this.style.color = color2;
    })
}

for (let button of buttons) {
    makeRandomColor(button);
}

const button = document.querySelector("#JSclick");

button.onclick = function() {
    console.log("You clicked me.");
}

button.onmouseenter = function() {
    console.log("Mouse enter.");
}

const btn3 = document.querySelector('#eventListenClick');
btn3.addEventListener('click', function() {
    alert("clicked");
})

function twist() {
    console.log("twist");
}


function shout() {
    console.log("shout");
}
// const imgs = document.getElementsByTagName('img');
// for (let img of imgs) {
//     img.src = "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
// }

const anchors = document.querySelectorAll('p a');

for (let a of anchors) {
    console.log(a.href);
}

const h1 = document.querySelector('h1');

const links = document.querySelectorAll("a");

for (let link of links) {
    link.innerText = "bro moment";
}

h1.innerHTML = "<sub>joe bama</sub>";

h1.style.fontSize = "3em";

for (let link of links) {
    link.style.color = "green";    
}

const h2 = document.querySelector('h2');
h2.setAttribute("class", "border");
let currentClasses = h2.getAttribute("class");
h2.setAttribute("class", currentClasses + " purple");

h2.classList.remove("purple");

const firstBold = document.querySelector("b");
firstBold.parentElement;

const newImg = document.createElement("img");
newImg.src = "https://www.google.com/logos/fnbx/pride/icon.gif";
document.body.appendChild(newImg);

const p = document.querySelector('p');
p.append("stop peeing.")

const firstLi = document.querySelector("li");
firstLi.parentElement.removeChild(firstLi);






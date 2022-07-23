function collectEggs() {
    let totalEggs = 6; 
    console.log()
}

let radius = 8;
if (radius > 0) {
    const PI = 3.1415926;
    let message = "hi!";
}

function callTwice(func) {
    func();
    func();
}

function rollDie() {
    console.log(Math.floor(Math.random() * 6 + 1));
    console.log(roll);
}

function makeMysteryFunc() {
     if (Math.random() > 0.5) {
        return function() {
            console.log("yamp");
        }
     } else {
        return function() {
            console.log("little vak0");
        }
     }
}

function makeBetweenFunc(min, max) {
    return function isBetween(num) {
        if (num >= max || num <= min) {
            return false;
        } 
        return true; 
    }
}
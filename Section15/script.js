// console.log("Hello from our first file.");

// let total = 1 + 3;

// console.log("Goodbye.");

// let randomNum = Math.random();

// if (randomNum >= 0.5) {
//     console.log(`randomNum is ${randomNum}.`);
// }

const dayOfWeek = "Monday".toLowerCase;

if (dayOfWeek === "monday") {
    console.log("Ugh, I hate Mondays.");
} else if (dayOfWeek === "saturday") {
    console.log("Yes, I love Saturdays!");
} else if (dayOfWeek === "friday") {
    console.log("Fridays are pretty good.");
} else {
    console.log("Meh.");
}

const password = "qwerty";

if (password.length >= 6) {
    if (password.indexOf(" ") !== -1) {
        console.log("Your password cannot have spaces in it.");
    } else {
        console.log("Password strength: strong");
    }
} else {
    console.log("Your passowrd is required to be six characters or longer.")
}

const userInput = prompt("Enter a value.")

if (userInput) {
    console.log("truthy.")
} else {
    console.log("falsyyyyyyyy - renthedog.");
}

if (0) {
    console.log("truthy.")
} else {
    console.log("falsyyyyyyyy - renthedog.");
}

const day = 2;
switch(day) {
    case 1:
        console.log("Sunday.");
        break;
    case 2:
        console.log("Monday.");
        break;
    case 3:
        console.log("Tuesday.");
        break;
    case 4:
        console.log("Wednesday.");
        break;
    case 5:
        console.log("Thursday.");
        break;
    case 6:
        console.log("Friday.");
        break;
    case 7:
        console.log("Saturday.");
        break;
    default: 
        console.log("Not a number that can possibly correspond to a day in the week.");
}
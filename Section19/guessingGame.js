let answer = Math.floor(Math.random() * 20);
let hint;
let input = prompt("Try to guess the number spanning from 1 to 20 that I'm thinking of.")
let amountOfInputs = 0;

while (input != answer) {
    if (input > answer) {
        hint = "Too high. Guess again.";
        amountOfInputs += 1;
    }
    if (input < answer) {
        hint = "Too low. Guess again.";
        amountOfInputs += 1;
    }
    if (input.toLowerCase() === "q" || input.toLowerCase().includes() === "quit") {
        break;
    }
    input = prompt(hint);
}
if ((parseInt(input)) === answer && amountOfInputs === 0) {
    console.log("It took you a SINGLE GUESS to reach your answer. You are the Google definition of 'the top 5%.'");
}
else if (parseInt(input) === answer) {
    amountOfInputs += 1;
    console.log("It took you " + amountOfInputs + " guesses to reach your answer.");
} else if (parseInt(input) !== answer) {
    console.log("It took you " + amountOfInputs + " attempts to give up. Apparently you didn't remember that quitters never win and winners never quit.");
}
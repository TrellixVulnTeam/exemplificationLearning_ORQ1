let playerOneScore = 0;
let playerTwoScore = 0;

const scoreString = document.querySelector("#score");
const plusOnePlayerOneButton = document.querySelector("#plusPOne");
const plusOnePlayerTwoButton = document.querySelector("#plusPTwo");
const reset = document.querySelector("#reset");
const selectMaxScore = document.querySelector("select");

plusOnePlayerOneButton.addEventListener("click", function() {
    playerOneScore++;
    if (playerOneScore == parseInt(selectMaxScore.options[selectMaxScore.selectedIndex].value)) {
        plusOnePlayerOneButton.disabled = true;
        plusOnePlayerTwoButton.disabled = true;
        const playerOneString = document.createElement("span");
        playerOneString.innerHTML = playerOneScore.toString();
        playerOneString.style.color = "green";

        const playerTwoString = document.createElement("span");
        playerTwoString.innerHTML = playerTwoScore.toString();
        playerTwoString.style.color = "red";

        scoreString.innerHTML = "";
        scoreString.append(playerOneString, " to ", playerTwoString);
    } else {
        scoreString.textContent = playerOneScore + " to " + playerTwoScore;
    }
})

plusOnePlayerTwoButton.addEventListener("click", function() {
    playerTwoScore++;
    if (playerTwoScore == parseInt(selectMaxScore.options[selectMaxScore.selectedIndex].value)) {
        plusOnePlayerOneButton.disabled = true;
        plusOnePlayerTwoButton.disabled = true;
        const playerOneString = document.createElement("span");
        playerOneString.innerHTML = playerOneScore.toString();
        playerOneString.style.color = "red";

        const playerTwoString = document.createElement("span");
        playerTwoString.innerHTML = playerTwoScore.toString();
        playerTwoString.style.color = "green";

        scoreString.innerHTML = "";
        scoreString.append(playerOneString, " to ", playerTwoString);
    } else {
        scoreString.innerHTML = playerOneScore + " to " + playerTwoScore;
    }
})

reset.addEventListener("click", function() {
    scoreString.innerHTML = "0 to 0";
    playerOneScore = 0;
    playerTwoScore = 0;
    plusOnePlayerOneButton.disabled = false;
    plusOnePlayerTwoButton.disabled = false;
})
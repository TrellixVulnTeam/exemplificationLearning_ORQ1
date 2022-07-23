let tasks = [""];
let counter = 0;

while (true) {
    let input = prompt("What would you like to do?");
    console.log(input);
    if (input.toLowerCase().trim() !== "new" && input.toLowerCase().trim() !== "list" && input.toLowerCase().trim() !== "remove" && input.toLowerCase().trim() !== "quit") {
        console.log("That's not an action I can perform at the current moment.");
    } else if ((input.toLowerCase().trim() === "new")) {
        input = prompt("What would you like to accomplish today?");
        tasks[counter] = input;
        counter++;
    } else if ((input.toLowerCase().trim() === "list")) {
        if (tasks[0] === "") {
            console.log("You have nothing in your to-do list.")
        } else {
            for (let i = 0; i < tasks.length; i++) {
                console.log((i + 1) + ". " + tasks[i]);
            }
        }
    } else if ((input.toLowerCase().trim() === "remove")) {
        input = prompt("Please type in the number that corresponds with the item you want to remove from your to-do list.");
        if (tasks[0] === "") {
            console.log("You have nothing in your to-do list.")
        } else if (parseInt(input) > tasks.length || parseInt(input) < tasks.length) {
            let deleted = tasks.splice((parseInt(input) - 1), 1);
            console.log("Deleted " + deleted + " from your to-do list.")
        }
    } else if ((input.toLowerCase().trim() === "quit")) {
        break;
    }
}
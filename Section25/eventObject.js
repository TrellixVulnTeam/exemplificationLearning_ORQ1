// const button = document.querySelector("button");

// button.addEventListener("click", function(evt) {
//     console.log(evt);
// })

// const input = document.querySelector("input");
// input.addEventListener("keydown", function(e) {
//     console.log(e.key);
// })

// input.addEventListener("keyup", function(e) {
//     console.log(e.code);
// })

const tweetForm = document.querySelector("#tweetForm");
tweetForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const newTweet = document.createElement("li");
    const bTag = document.createElement("b");

    bTag.append(this.elements.username.value);
    
    newTweet.append(bTag);
    newTweet.append(" - " + this.elements.tweet.value);

    console.log(newTweet);

    document.querySelector("#tweets").appendChild(newTweet);
    
    alert("SUBMIT");
});

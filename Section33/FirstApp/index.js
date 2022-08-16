const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("hello! we got a request!");
//     res.send("<h1>yonk</h1>");
// });

// app.get("*", (req, res) => {
//     res.send("what the bungesh");
// })

app.get("/cats", (req, res) => {
    res.send("meow.");
});

app.get("/r/:subreddit/:postId", (req, res) => {
    const {subreddit, postId} = req.params;
    res.send("<h1>browsing the " + postId + " page on the " + subreddit + " subreddit</h1>");
});

app.get("/dog", (req, res) => {
    res.send("dog.");
});

app.get("/", (req, res) => {
    res.send("hi.");
});

app.get("/search", (req, res) => {
    const {q} = req.query;
    res.send("query: " + q);
})

app.post("/cats", (req, res) => {
    console.log("this is my response to your POST request to /cats");
});

app.listen(9999, () => {
    console.log("listening on port 9999.")
});
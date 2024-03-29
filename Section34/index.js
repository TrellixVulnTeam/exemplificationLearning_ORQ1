const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, '/public')));

app.set("views", path.join(__dirname, '/views'));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/cats", (req, res) => {
    const cats = ["Blue", "Rocket", "Monty", "Stephanie", "Winston"]
    res.render("cats", {cats});
})

app.get("/r/:subreddit", (req, res) => {
    const {subreddit} = req.params;
    res.render("home", {subreddit});
});

app.get("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render("random", {rand: num});
});

app.listen(9998, () => {
    console.log("listening on port 9998");
});
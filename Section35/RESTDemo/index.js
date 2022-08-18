const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
    {
        username: "Todd",
        comment: "stop peeing"
    },
    {
        username: "Joe Mama",
        comment: "yampasnout"
    },
    {
        username: "neal", 
        comment: "he hoooo"
    }, 
    {
        username: "yamp",
        comment: "bao!"
    }
];

app.get("/comments", (req, res) => {
    res.render("comments/index.ejs", {comments});

});

app.get("/comments/new", (req, res) => {
    res.render("comments/new.ejs");
})

// app.get("/tacos", (req, res) => {
//     res.send("GET /tacos response");
// });

// app.post("/tacos", (req, res) => {
//     const {meat, qty} = req.body;
//     res.send("POST /tacos response (meat: " + meat + "; quantity: " + qty + ")");
// });

app.listen("9997", () => {
    console.log("yingesh");
});

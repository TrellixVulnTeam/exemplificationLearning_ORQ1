const path = require('path');
const { v4: uuid } = require('uuid'); //For generating ID's
const express = require('express');
const app = express();
const methodOverride = require("method-override");

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))
// To parse incoming JSON in POST request body:
app.use(express.json())
app.use(methodOverride("_method"))

// Views folder and EJS setup:
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
];

app.get("/comments", (req, res) => {
    res.render("comments/index.ejs", {comments});
});

app.get("/comments/new", (req, res) => {
    res.render("comments/new.ejs");
});

app.post("/comments", (req, res) => {
    const {username, comment} = req.body;
    comments.push({username, comment, id: uuid()}); 
    res.redirect("comments/index");
}); 

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
});

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
});

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const comment = comments.find(c => c.id === id);
    comment.comment = newCommentText;
    res.redirect("/comments");
});

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect("/comments");
});

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

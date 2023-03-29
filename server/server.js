require('dotenv').config();
const express = require("express");
const {Members, User} = require('./mongoose');
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});

app.use(express.static(path.join(__dirname, "../client/build")));

app.use(bodyParser.urlencoded({
    extended: true
  }));


app

.get('/memberList', (req, res) => {

    Members.find()
    .then(response => res.send(response))
    .catch(err => res.send(err));
})

.post('/add', (req, res) => {
    const member = req.body;
    const newMember = new Members(member);

    console.log(member);
    newMember.save()
    .then(response => res.send(response))
    .catch(err => res.send(err));
})

.post('/validateUser', (req, res) => {
    const {email, password} = req.body;

    User.findOne({email: email, password: password})
    .then(res.send('Valid'))
    .catch(err => {
        res.send('Invalid User');
        console.log(err);
    });
});

// This route serves the React app
app.get('*', (req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

app.listen(port, () => console.log(`Server listening on port ${port}`));
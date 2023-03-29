const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const DB_URL = process.env.DB_URL;

const intialDbConnection = () => {
    mongoose.connect(DB_URL, {
        useNewUrlParser: true
    })
        .then(conn => {
            console.log(`db connected`);
        })
        .catch(err => {
            console.log(`Error connecting to Database ${err}`);
        })
}

intialDbConnection();

const member = mongoose.Schema({
    id: Number,
    memberId: Number,
    name: String,
    contact: String,
    doj: String,
    plan: String,
    fees: Number
});

const Members = mongoose.model("Member", member);

const user = mongoose.Schema({
    email: String,
    password: String
});

const User = mongoose.model("User", user);

module.exports = {Members, User};
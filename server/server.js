// require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
// const cors = require("cors");

app.use(express.static(path.join(__dirname, "../client/build")));

// app.use(cors());
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', '*');
//     res.setHeader('Access-Control-Allow-Headers', '*');
//     res.setHeader('Access-Control-Allow-Credentials', false);
//     next();
// });

// This route serves the React app
app.get('*', (req, res) => res.sendFile(path.join(__dirname, "../client/build/index.html")));

app.listen(port, () => console.log(`Server listening on port ${port}`));


//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from 'express';
//import bodyParser from 'body-parser';
import { fileURLToPath } from "url";
import * as path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const rightPassword = "ILoveProgramming";
var isAuthenticated = false;

app.use(express.urlencoded({ extended: true }));

function checkPassword(req, res, next) {
    console.log(req.body);
    const password = req.body["password"];
    isAuthenticated = (password === rightPassword);
    next();
}

app.use(checkPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req, res) => {
    if (isAuthenticated) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.redirect("/");
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
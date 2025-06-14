import express from "express";

const app = express();
const port = 3000;

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const dayName = days[today.getDay()];


app.get("/", (req, res) => {
    if (today.getDay() === 0 || today.getDay() === days.length - 1) {
        res.render("index.ejs",
            {dayType: "the weekend",
            advice: "it's time to have fun"});
    } else {
        res.render("index.ejs",
            {dayType: "a weekday",
                advice: "it's time to work hard"});
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
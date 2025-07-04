import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "123456",
  port: 5432,
});

db.connect();


app.get("/", async (req, res) => {
  //Write your code here.
  const result = await db.query("SELECT country_code FROM visited_countries");
  let country_codes = [];
  result.rows.forEach((country) => {
    country_codes.push(country.country_code);
  })
  console.log(result.rows);
  res.render("index.ejs", {
    total: country_codes.length,
    countries: country_codes
  });
  //db.end();
});

app.post("/add", async (req, res) => {
  const country = req.body.country;

  const result = await db.query(
      "SELECT country_code FROM countries " +
      "WHERE country_name = $1", [country]);

  if (result.rows.length > 0) {
    db.query("INSERT INTO visited_countries " +
        "(country_code) VALUES ($1)", [result.rows[0].country_code]);
  } else {
    console.log("Country name not found. Please try again.");
  }
  //console.log(result.rows[0].country_code);
  res.redirect("/");
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

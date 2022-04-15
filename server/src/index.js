const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const { request } = require("express");

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Another123!@",
  database: "workIt",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected!");
});

connection.query("Select * from reviews", (err) => {
  if (err) {
    console.log("Table is not found, creating reviews table");
    connection.query(
      "CREATE table reviews (id int auto_increment PRIMARY KEY, review varchar(255), ratings varchar(255))",
      (err) => {
        if (err) throw err;
      }
    );
  }
});

app.get("/api/feedback", (req, res) => {
  const queryString = "SELECT * from reviews";
  connection.query(queryString, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post("/api/feedback", (req, res) => {
  const { review, ratings } = req.body;
  const { communication, service, recommend } = ratings;
  const ratingString = `${communication},${service},${recommend}`;

  const queryString = `insert into reviews ( review, ratings) values ("${review}", "${ratingString}")`;
  connection.query(queryString, (err) => {
    if (err) throw err;
    console.log("feedback is inserted");
  });
  res.send("hello ");
});

app.listen(4000, (err) => {
  if (err) console.log(err);
  console.log("Server is listening on PORT: 4000");
});

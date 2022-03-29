const express = require("express");
const res = require("express/lib/response");
const mysql = require("mysql2");
const PORT = 8080;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Another123!@",
  database: "workIt", // newly added prop after db is created
});

// connect to Mysql
db.connect((err) => {
  if (err) throw err;
  console.log("Successfully connected to localhost Database");
});

const app = express();
app.use(express.json());

// create Database
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE workIt";
  db.query(sql, (err) => {
    if (err) throw err;
    res.send("workIt database created");
  });
});

app.get("/createUsersTable", (req, res) => {
  let sql =
    "CREATE TABLE Users(ID int auto_increment, Name varchar(255), Bio varchar(255), Skills varchar(255), ProfilePhoto varchar(255), ProfileType varchar(255), ProductsPurchased varchar(255), Reviews varchar(255), PRIMARY KEY(IDt))";
  db.query(sql, (err) => {
    if (err) throw err;
    res.send("Users Table created");
  });
});

app.listen(PORT, () => {
  console.log("Listening to port:" + PORT);
});

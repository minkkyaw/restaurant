const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

let count = 0;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const currReservations = [];
const currWaitList = [];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
  count++;

  console.log(count);
});

app.get("/ViewTables", function(req, res) {
  res.sendFile(path.join(__dirname, "ViewTables.html"));
});

app.get("/MakeReservation", function(req, res) {
  res.sendFile(path.join(__dirname, "MakeReservation.html"));
  // res.redirect("/ViewTables");
});

app.get("/api/tables", function(req, res) {
  return res.json(currReservations);
});

app.get("/api/wait-list", function(req, res) {
  return res.json(currWaitList);
});

app.post("/api/reservations", function(req, res) {
  var newReservation = req.body;

  currReservations.length < 5
    ? currReservations.push(newReservation)
    : currWaitList.push(newReservation);
  res.redirect("/ViewTables");
  // res.json(newReservation);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

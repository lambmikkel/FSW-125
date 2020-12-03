const express = require("express")
const app = express()


const basketball = [
  "National Leagues",
  {name: "NBA", rating: 10},
  {name: "Euro League", rating: 8},
  {name: "Australian Basketball League", rating: 7}
]
const teams = [
  "Favorite Teams",
  {name: "Houston Rockets", rating: 10},
  {name: "Los Angelos Lakers", rating: 8},
  {name: "Golden State Warriors", rating: 9}
]
const players = [
  "Favorite Active Players",
  {name: "James Harden", rating: 50},
  {name: "Steph Curry", rating: 48},
  {name: "Mike James", rating: 47},
  {name: "Kevin Durant", rating: 46}
]

app.get('/basketball', (req, res) => {
  res.send(basketball)
})
app.get('/teams', (req, res) => {
  res.send(teams)
})
app.get('/players', (req, res) => {
  res.send(players)
})
app.listen(4001, () => {
  console.log("App is listening on port 4001")
})
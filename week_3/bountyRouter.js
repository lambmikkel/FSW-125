const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const bounties = [
  {firtName: "Anakin", lastName: "Skywalker", living: "true", bountyAmount: 100000, type: "Jedi", _id: uuidv4() },
  {firtName: "Darth", lastName: "Maul", living: "true", bountyAmount: 80000000, type: "Sith", _id: uuidv4() },
  {firtName: "Obiwan", lastName: "Kunobe", living: "false", bountyAmount: 100000, type: "Jedi", _id: uuidv4() },
  {firtName: "Darth", lastName: "Vader", living: "false", bountyAmount: 100000, type: "Jedi", _id: uuidv4() }
] 

bountyRouter.get("/", (req, res) => {
  res.send(bounties)
})

bountyRouter.post("/", (req, res) => {
  const newBounty = req.body
  newBounty.__id = uuidv4()
  bounties.push(newBounty)
  res.send("You have successfully loaded ${newBounty.firstName} to the database!")
})

module.exports = bountyRouter


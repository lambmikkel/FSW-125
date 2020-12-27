const express = require("express");
const bountyRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const bounties = [
  {
    firtName: "Anakin",
    lastName: "Skywalker",
    living: "true",
    bountyAmount: 100000,
    type: "Jedi",
    _id: uuidv4(),
  },
  {
    firtName: "Darth",
    lastName: "Maul",
    living: "true",
    bountyAmount: 80000000,
    type: "Sith",
    _id: uuidv4(),
  },
  {
    firtName: "Obiwan",
    lastName: "Kunobe",
    living: "false",
    bountyAmount: 100000,
    type: "Jedi",
    _id: uuidv4(),
  },
  {
    firtName: "Darth",
    lastName: "Vader",
    living: "false",
    bountyAmount: 100000,
    type: "Jedi",
    _id: uuidv4(),
  },
];

bountyRouter.get("/bounties", (req, res) => {
  console.log(bounties)
  res.send(bounties);
  
});

bountyRouter.get("/bounties/:bountyID", (req, res) => {
  const bountyID = req.params.bountyID;
  const foundBounty = bounties.find((bounty) => bounty._id === bountyID);
  res.send(foundBounty);
});

bountyRouter.delete("/bounties/:bountyID", (req, res) => {
  const bountyID = req.params.bountyID;
  const bountyIndex = bounties.findIndex((bounty) => bounty.__id === bountyID);
  bounties.splice(bountyIndex, 1);
  res.send("Bounty removed!");
})

bountyRouter.put("/bounties/:bountyID", (req, res) => {
  const bountyID = req.params.bountyID;
  const updateObject = req.body
  const bountyIndex = bounties.findIndex(bounty => bounty.__id === bountyID)
  const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)
  res.send(updatedBounty)
})

bountyRouter.post("/bounties", (req, res) => {
  const newBounty = req.body
  newBounty.__id = uuidv4()
  bounties.push(newBounty)
  res.send("You have successfully loaded ${newBounty.firstName} to the database!")
})

module.exports = bountyRouter;

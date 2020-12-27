const express = require("express");
const toDoRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const toDos = [
  {
    name: "Todo 1",
    description: "Homework",
    imageUrl: "https://chhsnews.com/wp-content/uploads/2018/10/homework.jpg",
    completed: true,
    _id: uuidv4(),
  },
  {
    name: "ToDo 2",
    description: "Job Tasking",
    imageUrl:
      "https://securityonline.info/wp-content/uploads/2018/03/ipscan-win10.png",
    completed: false,
    _id: uuidv4(),
  },
  {
    name: "ToDo 3",
    description: "Certification Testing",
    imageUrl:
      "https://images.youracclaim.com/images/a31c0301-ff96-4cee-9435-0a4b40ce6e66/cisco_ccna_R_26S.png",
    completed: false,
    _id: uuidv4(),
  },
  {
    name: "ToDo 4",
    description: "Job Application",
    imageUrl:
      "https://insights.dice.com/wp-content/uploads/2019/07/Tell-Me-About-Yourself-Interview-Job-Interview-Interview-Questions-Dice.png",
    completed: true,
    _id: uuidv4(),
  },
];

toDoRouter.get("/", (req, res) => {
  res.send(toDos);
});

toDoRouter.get("/:toDoID", (req, res) => {
  const toDoID = req.params.toDoID;
  const toDoSearch = toDos.find((toDo) => toDo.__id === toDoID);
  res.send(toDoSearch);
});

toDoRouter.delete("/:toDoID", (req, res) => {
  const toDoID = req.params.toDoID;
  const toDoSearch = toDos.findIndex((toDo) => toDo.__id === toDoID);
  toDos.splice(toDoSearch, 1);
  res.send("To Do removed!");
});

toDoRouter.put("/:toDoID", (req, res) => {
  const toDoID = req.params.toDoID;
  const toDoSearch = toDos.findIndex((toDo) => toDo.__id === toDoID);
  const toDoUpdate = Object.assign(toDos[toDoSearch], req.body);
  res.send(toDoUpdate);
});

toDoRouter.post("/", (req, res) => {
  const newToDo = req.body;
  newToDo.__id = uuidv4();
  toDos.push(newToDo);
  res.send("Thanks for adding to the To Do list!");
});

module.exports = toDoRouter;

const express = require("express");
const app = express();
app.use(express.json());
const routes = require("./Routers/index")

app.use(routes)

app.get("/")

app.listen(8004, () => {
  console.log("App is listening on port 8004");
});

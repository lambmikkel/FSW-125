const express = require("express")
const app = express()
app.use(express.json())

app.use('/bounties', require("./bountyRouter"))

app.listen(8001, () => {
    console.log("App is listening on port 8001")
})
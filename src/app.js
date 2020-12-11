const express = require("express")
const app = express()
const cors = require("cors")
const db = require('./models/repository')


db.connect()
app.use(cors())
app.use(express.json())

const index = require("./routes/index")
const artesaos = require("./routes/artesaRoute")

app.use("/", index)
app.use("/artesaos", artesaos)

module.exports = app

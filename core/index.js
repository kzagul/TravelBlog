//packages
const express = require('express')
const { Pool } = require('pg')
const bodyParser = require("body-parser");
const path = require('path');
const cors = require('cors')
//app object
const app = express()
//db
const db = require('./app/db/Sequelize')
//models
const {TypeOfExcursion} = require('./app/models/typeofexcursion.model')
//routes
const typeofexcursion = require('./app/routes/typeofexcursion.routes');
const { json } = require('body-parser');


const index = () => JSON.stringify(TypeOfExcursion.findAll())


const addTypeOfExcursion = async (req) => {
    const {text} = await json(req)
    TypeOfExcursion.create({
        text,
    })
}



app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
  });




//port for localhost
const PORT = 3001
//checking the server's work
app.listen(PORT, () => {
    console.log(`listen to port ${PORT} \n\nhttp://localhost:3001/`)
})

//packages
const express = require('express')
const { Pool } = require('pg')
const bodyParser = require("body-parser");
const cors = require('cors')

//db
const db = require('./app/db/Sequelize')

//routes
const typeofexcursion = require('./app/routes/typeofexcursion.routes')

//app object
const app = express()


//port for localhost
const PORT = 3001

app.get('/', async (req, res) => {
    res.send("Heoo")
})

app.use('/api', typeofexcursion)



//checking the server's work
app.listen(PORT, () => {
    console.log(`listen to port ${PORT} \n\nhttp://localhost:3001/`)
})

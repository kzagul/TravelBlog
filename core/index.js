//packages
const express = require('express')
const { Pool } = require('pg')

//cors
const cors = require('cors')

//app object
const app = express()

//db
const db = require('./DBConnection')

//port for localhost
const PORT = 3001

app.get('/', async (req, res) => {
    res.send("Heoo")
})


//checking the server's work
app.listen(PORT, () => {
    console.log(`listen to port ${PORT}`)
})

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
// const {TypeOfExcursion} = require('./app/models/typeofexcursion.model')
// //routes
// const typeofexcursion = require('./app/routes/typeofexcursion.routes');
// const { json } = require('body-parser');


// const index = () => JSON.stringify(TypeOfExcursion.findAll())


// const addTypeOfExcursion = async (req) => {
//     const {text} = await json(req)
//     TypeOfExcursion.create({
//         text,
//     })
// }

app.use(cors())
app.use(express.json())

const TypeOfVisiting = require('./app/routes/typeofvisiting.routes.js')
const TypeOfExcursion = require('./app/routes/typeofexcursion.routes.js')
const UserLoginController = require('./app/routes/userlogin.routes')

app.use('/api', TypeOfVisiting)
app.use('/api', TypeOfExcursion)
app.use('/api', UserLoginController)



app.get("/", (req, res) => {
    res.json({ message: "Travelblog application" });
  });




//port for localhost
const PORT = 3001
//checking the server's work
app.listen(PORT, () => {
    console.log(`listen to port ${PORT} \n\nhttp://localhost:3001/`)
})

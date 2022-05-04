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

app.use(cors())
app.use(express.json())

// routes
const TypeOfVisiting = require('./app/routes/typeofvisiting.routes.js')
const TypeOfExcursion = require('./app/routes/typeofexcursion.routes.js')
const Users = require('./app/routes/user.routes')
const Excursion = require('./app/routes/excursion.routes')

app.use('/api', TypeOfVisiting)
app.use('/api', TypeOfExcursion)
app.use('/api', Users)
app.use('/api', Excursion)



app.get("/", (req, res) => {
    res.json({ 
      message: "Travelblog application by K.Zagul, O.Savenko, A.Gushenko",
      Excursions: {
        getAll: "http://localhost:3002/api/excursions"
      },
      TypesOfVisitings: {
        getAll:  "http://localhost:3002/api/typevisiting"
      },
      TypesOfExcursions: {
        getAll:  "http://localhost:3002/api/typeexcursion"  
      }
    });
  });

//port for localhost
const PORT = 3002

//checking the server's work
app.listen(PORT, () => {
    console.log(`port:${PORT} \nhttp://localhost:3002/`)
})

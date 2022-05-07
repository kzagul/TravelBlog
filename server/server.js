const express = require("express");
const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });


const db2 = require('./app/DBconnection')

//routes to controllers with API
const locateRouter = require('./app/routes/locate.routes')


// routes
const TypeOfVisiting = require('./app/routes/typeofvisiting.routes.js')
const TypeOfExcursion = require('./app/routes/typeofexcursion.routes.js')
const Excursion = require('./app/routes/excursion.routes')

app.use('/api', TypeOfVisiting)
app.use('/api', TypeOfExcursion)
app.use('/api', Excursion)



//url links
app.use(cors())
app.use(express.json())

app.use('/api', locateRouter)




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



// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);



require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8086;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}
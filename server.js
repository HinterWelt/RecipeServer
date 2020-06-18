const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Sequelize sync DB
const db = require("./app/models");
db.sequelize.sync();

require("./app/routes/routes")(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Recipe Viewer API." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});




// const express = require('express');

// const PORT = process.env.PORT || 3001;

// const app = express();

// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: 'LELU',
//     user: 'talon',
//     password: 'zJ$mg%rj++a85Bkb',
//     database:'TALON'
// });

// connection.connect(function(err){
//     (err)? console.log(err): console.log(connection);
// });

//    require('./app/routes/html-routes')(app,connection);
 
// app.listen(PORT,() => {
//     console.log('App is running on port ${PORT}');
// });


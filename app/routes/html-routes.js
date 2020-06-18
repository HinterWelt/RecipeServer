const mysql = require('mysql');

module.exports = function(app,connection) {
    app.get('/', function(req,res) {
        //res.send('Hello from a simple react project');
        connection.query('SELECT * FROM TALON.Dish', function(err,data){
            (err)?res.send(err):res.json({Dish: data});
        });
    });
};
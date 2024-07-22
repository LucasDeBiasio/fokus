const express = require('express');
var mysql = require('mysql')

var con = mysql.createConnection({
    host: 'localhost',
    user: "lucasdebiasio",
    password: "71Fj423HY$",
    database: "Finance"
})
const app = express();

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM Users", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

app.get('/', (req,res) => {
    res.send("Successful response.");
});

app.listen(3000, () => console.log("listening to port 3000"));
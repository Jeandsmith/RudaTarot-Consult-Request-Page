let express = require('express');
let ejs = require('ejs');
const app = express();
let PORT = process.env.PORT;
let path = require('path');
let con = require('./public/db.js');
let bodyParser = require('body-parser');

// Setting enviroments and paths
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(express.static(path.join(__dirname, "views")));

// Resolves problem when the heroku server is not running
if (PORT == null || PORT == "") {
    PORT = 8000;
}

app.get('/home', (req, res) => {
    res.render('home');
});

app.post('/home/request', con.postClient);

app.get('/home/thank-you', (req, res) => {
    res.render('thank-you');
});

// Listen to the port on the localmachine/heroku server
app.listen(PORT, () => {
    console.log("Application now running on port: http://localhost:" + PORT + "/home");
});

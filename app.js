let express = require('express');
let ejs = require('ejs');
const app = express();
let PORT = process.env.PORT;
let path = require('path');
let con = require('./public/db.js');
let bodyParser = require('body-parser');

// Setting enviroments and paths
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));            // Serve the public folder to the app 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('added', true);

app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "images")));

// Resolves problem when the heroku server is not running   
if (PORT == null || PORT == "") {
    PORT = 8000;
}

app.get('/home/', (req, res) => {
    res.render('home');
});

app.post('/home/request', con.postClient);

app.get('/home/thank-you/', (req, res) => {
    let added = req.app.get('added');

    if (!added) { 
        res.render('thank-you',  {response: "Tenemos este cliente en nuestros datos. \
        Si no hemos hecho comunicacion en 7 dias, puedes regresar a llenar otro formulario."}); 
    }
    else {
        res.render('thank-you', {response: "Gracias por llenar este formulario. Te llamaremos."});
    }
});

// Listen to the port on the localmachine/heroku server
app.listen(PORT, () => {
    console.log("Application now running on port: http://localhost:" + PORT + "/home");
});

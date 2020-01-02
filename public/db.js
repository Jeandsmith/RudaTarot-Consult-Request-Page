let con = require('mysql');
let conIns = con.createConnection({
    host: "127.0.0.1",
    user: 'root',
    password: 'root',
    database: 'clients',
    supportBigNumbers: true
});

conIns.connect((err) => {
    if (err) console.log(err.stack);
});

module.exports.postClient = (req, res) => {
    // Do something with the post 
    // console.log(req.params);
    console.log(req.body);
    // Send the client to thank you page
    res.redirect('thank-you');
}
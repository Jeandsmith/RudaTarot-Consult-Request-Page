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

// Add new client to the database
module.exports.postClient = (req, res) => {
    // Do something with the post 
    let values = Object.values(req.body);
    let query = "INSERT INTO client (firstName, lastName, tel, email, ocupation, salary, problemStatement, dateIn) VALUE(?, ?, ?, ?, ?, ?, ?, CURDATE()); ";

    // See the values of the vector
    console.log(req.values);

    // Insert the data into the DBMS
    conIns.query({
       sql: query,
       timeout: 4000,
       values: values 
    }, (error, results) => {
        if (error) {
            throw error;
        }

        console.log("Added: " + results.affectedRows + ' rows');

    });

    // Send the client to thank you page
    res.redirect('thank-you');
};
let con = require('mysql');

// Create instance of connection
let conIns = con.createConnection({
    host: "localhost",
    user: 'root',
    password: 'root',
    database: "clients",
    supportBigNumbers: true
});

conIns.connect((err) => {
    if (err) console.log(err.stack);
    else { console.log('Connection Success'); }
});

// Add new client to the database
module.exports.postClient = (req, res) => {
    // Do something with the post 
    let values = Object.values(req.body);
    let query = "INSERT INTO client \
    (firstName, lastName, tel, email, ocupation, salary, problemStatement, dateIn) \
    VALUE(?, ?, ?, ?, ?, ?, ?, CURDATE()); ";

    // Insert the data into the DBMS
    conIns.query({
       sql: query,
       timeout: 4000,
       values: values 
    }, (error, results) => {

        // Manage duplicate entries
        if (error && error.code === "ER_DUP_ENTRY") {
            req.app.set('added', false);
        }

        // Handle General error 
        else if (error) {console.log(error.stack);}

        else { console.log("Added: " + results.affectedRows + ' rows'); }
    });

    req.app.set('added', true);
    // Send the client to thank you page
    res.redirect('thank-you');
};
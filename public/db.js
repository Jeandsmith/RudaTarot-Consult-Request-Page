let con = require('postgres');

// Create instance of connection
const sql = con('postgres://root:root@localhost:5432/ClientDB', {
    connection: {
        application_name: 'app.js'
    }
});

// Add new client to the database
module.exports.postClient = (req, res) => {
    
    // I dont need the button, so remove from packet
    delete req.body.button;

    /** 
     * Asynchronus code
     */
    (async () => {
        // sql `
        //     insert into client ${
        //         sql(req.body)
        //     }
        // `

        sql `insert into client ${
            sql(req.body)
        }`;

        console.log("Done Inserting");
    })();

    res.redirect('thank-you');
};
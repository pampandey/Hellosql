// import mysq12 library
const mysql = require('mysql2');

//connect to our database
const db = mysql.createConnection({ 
    host:'34.170.135.140',
    user: 'root',
    password:'BuildingSoFLo',
    database: 'swecc-summer-2022',
});

// run a simple query
db.query('SELECT * FROM Books_dd',(err,results)=>{
    if(err) {
        console.log(err);
    }
    console.log(results);
});
 

//output the results




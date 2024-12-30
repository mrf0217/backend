const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",       // Replace with your MySQL username
    password: "",       // Replace with your MySQL password
    database: "donor_darah", // Your database name
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed: " + err.message);
        return;
    }
    console.log("Connected to MySQL Database.");
});

module.exports = db;

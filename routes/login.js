const express = require("express");
const path = require("path");
const db = require("../db");

const router = express.Router();

// Serve the login HTML file
router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/login.html"));
});

// Handle login form submission
router.post("/login", (req, res) => {
    const { nama, password } = req.body;

    const query = "SELECT * FROM didonor WHERE nama = ? AND password = ?";
    db.query(query, [nama, password], (err, results) => {
        if (err) {
            console.error("Error querying database: " + err.message);
            return res.status(500).send("Database error.");
        }
        if (results.length > 0) {
            res.redirect("/dashboard"); // Redirect to the dashboard
        } else {
            res.send("<h2>Login Failed: Invalid credentials.</h2>");
        }
        
    });
});


module.exports = router;

const express = require("express");
const path = require("path");
const db = require("../db");


const router = express.Router();

router.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/registerpendonor.html"));
});


// Serve registration form
router.post("/register", (req, res) => {
    const { nama, password, golongan_darah, lokasi } = req.body;

    if (!nama || !password || !golongan_darah || !lokasi) {
        return res.status(400).send("All fields are required.");
    }

    const query = "INSERT INTO pendonor (name, password, golongan_darah, lokasi) VALUES (?, ?, ?, ?)";
    db.query(query, [nama, password, golongan_darah, lokasi], (err) => {
        if (err) {
            console.error("Error inserting data: " + err.message);
            return res.status(500).send("Error saving data to the database.");
        }

        // Success response with navigation button
        res.send(`
            <h2>Registration Successful!</h2>
            <form action="/pendonor/login" method="GET">
                <button type="submit">Back to Pendonor Login</button>
            </form>
        `);
    });
});


module.exports = router;

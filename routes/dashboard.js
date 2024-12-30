const express = require("express");
const path = require("path");
const db = require("../db"); // Assuming db.js exists in the backend folder

const router = express.Router();

// Serve the dashboard HTML file
router.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/dashboard.html"));
});

// API Route to fetch Didonor data
router.get("/api/didonor", (req, res) => {
    const query = "SELECT id, nama, butuh_golongan_darah, lokasi FROM didonor";
    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching didonor data: " + err.message);
            return res.status(500).send("Database error");
        }
        res.json(results);
    });
});

// API Route to fetch Pendonor data
router.get("/api/pendonor", (req, res) => {
    const query = "SELECT id, name, golongan_darah, lokasi FROM pendonor";
    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching pendonor data: " + err.message);
            return res.status(500).send("Database error");
        }
        res.json(results);
    });
});

module.exports = router;

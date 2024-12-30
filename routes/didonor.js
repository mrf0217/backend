    const express = require("express");
    const db = require("../db");

    const router = express.Router();

    // Handle donation (update uang_yang_diterima)
    router.post("/donate", (req, res) => {
        const { id, donor_uang_berapa } = req.body;

        if (!id || !donor_uang_berapa) {
            return res.status(400).send("Missing 'id' or 'donor_uang_berapa' in request body");
        }

        const query = "UPDATE pendonor SET donor_uang_berapa = donor_uang_berapa + ? WHERE id = ?";
        db.query(query, [donor_uang_berapa, id], (err) => {
            if (err) return res.status(500).send("Database error");
            res.send("Donation updated successfully");
        });
    });



    router.post("/donate-blood", (req, res) => {
        const { id } = req.body;

        if (!id) {
            return res.status(400).send("Missing 'id' in request body");
        }

        const query = "UPDATE didonor SET darah_sudah_di_terima = 'sudah' WHERE id = ? AND darah_sudah_di_terima = 'belum'";
        db.query(query, [id], (err, results) => {
            if (err) return res.status(500).send("Database error");
            if (results.affectedRows === 0) {
                return res.status(400).send("Cannot update blood status, already 'sudah' or invalid id");
            }
            res.send("Blood donation updated successfully");
        });
    });



    module.exports = router;

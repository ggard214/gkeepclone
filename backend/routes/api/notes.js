const express = require("express");
const router = express.Router();

const db = require("../../db/models");

const { User, Note } = db;

// Add new note
router.post("/new", async (req, res) => {
    const notes = await Note.findAll({
        where: {userid}
    })
});

module.exports = router;
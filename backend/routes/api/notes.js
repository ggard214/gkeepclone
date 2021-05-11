const express = require("express");
const router = express.Router();

const db = require("../../db/models");

const { User, Note } = db;

router.get("/", async (req, res, next) => {
    const notes = await Note.findAll({
        where: {userid}
    })
});

module.exports = router;
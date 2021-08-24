const express = require("express");
const router = express.Router();

router.get("/shipping", (req, res) => res.render("shipping"));

module.exports = router;

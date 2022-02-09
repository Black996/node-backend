const express = require("express");
const { endpoints } = require("../controllers");

const router = express.Router();

router.route("/").get(endpoints);

module.exports = router;

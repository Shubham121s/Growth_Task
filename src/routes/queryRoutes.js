const express = require("express");
const { handleQuery } = require("../controllers/queryController");
const { explainQuery } = require("../controllers/explainController");
const { validateQuery } = require("../controllers/validateController");

const router = express.Router();

router.post("/query", handleQuery);
router.get("/explain", explainQuery);
router.post("/validate", validateQuery);

module.exports = router;

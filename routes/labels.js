const { Router } = require("express");
const labelsController = require("../controllers/labels.controller");

const router = new Router();

router.get("/", labelsController.getAll);

module.exports = router;

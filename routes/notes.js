const { Router } = require("express");
const notesController = require("../controllers/notes.controller");

const router = new Router();

router.get("/", notesController.getAll);

module.exports = router;
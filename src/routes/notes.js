import { Router } from "express";
import { deleteNote, getAll, post } from "../controllers/notes.controller";

const router = Router();

router.get("/", getAll);
router.post("/", post);
router.delete("/:id", deleteNote);

export default router;

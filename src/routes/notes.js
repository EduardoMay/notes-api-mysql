import { Router } from "express";
import {
  deleteNote,
  getAll,
  postNote,
  updateNote
} from "../controllers/notes.controller";

const router = Router();

router.get("/", getAll);
router.post("/", postNote);
router.delete("/:id", deleteNote);
router.patch("/:id", updateNote);

export default router;

import { Router } from "express";
import {
  deleteNote,
  getAll,
  post,
  updateNote
} from "../controllers/notes.controller";

const router = Router();

router.get("/", getAll);
router.post("/", post);
router.delete("/:id", deleteNote);
router.patch("/:id", updateNote);

export default router;

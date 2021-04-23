import { Router } from "express";
import {
  getAll,
  postLabel,
  updateLabel,
  deleteLabel
} from "../controllers/labels.controller";

const router = Router();

router.get("/", getAll);
router.post("/", postLabel);
router.patch("/:id", updateLabel);
router.delete("/:id", deleteLabel);

export default router;

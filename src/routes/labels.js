import { Router } from "express";
import {
  getAll,
  postLabel,
  updateLabel,
  deleteLabel
} from "../controllers/labels.controller";

const router = Router();

router.get("/", getAll);
router.post("/:id", postLabel);
router.patch("/:id", updateLabel);
router.delete("/:id", deleteLabel);

export default router;

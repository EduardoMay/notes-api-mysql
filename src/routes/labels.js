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
router.patch("/", updateLabel);
router.post("/", deleteLabel);

export default router;

import { Router } from "express";
import { getAll, post } from "../controllers/labels.controller";

const router = Router();

router.get("/", getAll);
router.post("/", post);

export default router;

import { Router } from "express";
import { getAll } from "../controllers/notes.controller";

const router = Router();

router.get("/", getAll);

export default router;

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";

// Routes
import NotesRouter from "../routes/notes";
import LabelsRouter from "../routes/labels";

const app = express();

app.set("port", process.env.PORT || 3010);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("API Notes use MYSQL");
});

// Notes
app.use("/api/v1/notes", NotesRouter);
app.use("/api/v1/labels", LabelsRouter);

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

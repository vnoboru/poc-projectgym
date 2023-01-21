import { Request, Response } from "express";
import express from "express";
import cors from "cors";
import * as control from "./controllers/exercice-controller.js";

const server = express();
server.use(express.json());
server.use(cors());

server.post("/exercices", control.postExercice);
server.get("/exercices", control.getExercices);

server.listen(4000, () => {
  console.log("Ta executando...");
});

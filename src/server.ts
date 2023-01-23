import express from "express";
import cors from "cors";
import * as control from "./controllers/exercice-controller.js";

const server = express();
server.use(express.json());
server.use(cors());

server.post("/exercices", control.postExercice);
server.get("/exercices", control.getExercices);
server.put("/exercices", control.updateExercice);
server.delete("/exercices", control.deleteExercice);
server.get('/exercices/:id', control.findExercice);

server.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING IN PORT: ${process.env.PORT}`);
});

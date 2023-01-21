import { Request, Response } from 'express';
import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());

server.get("/teste", (req: Request, res: Response) => {
  res.status(200).send("OK");
});

server.listen(4000, () => {
  console.log("Ta executando...");
});

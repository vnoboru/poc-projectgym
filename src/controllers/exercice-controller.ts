import { Request, Response } from "express";
import { Exercice } from "../protocols/Exercice.js";
import { exerciceSchema } from "../schemas/exercice-schema.js";
import * as repos from "../repositories/exercice-repository.js";

export async function postExercice(req: Request, res: Response) {
  const exercice = req.body as Exercice;
  const { error } = exerciceSchema.validate(exercice);

  if (error) {
    return res.status(400).send({
      message: error.message,
    });
  }

  try {
    repos.insertUnique(exercice);

    return res.sendStatus(201);
  } catch {
    return res.sendStatus(500);
  }
}

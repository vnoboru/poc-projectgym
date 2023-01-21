import { Request, Response } from "express";
import { Exercice } from "../protocols/Exercice.js";
import { exerciceSchema } from "../schemas/exercice-schema.js";
import * as repos from "../repositories/exercice-repository.js";
import { QueryResult } from "pg";
import connection from "../db/database.js";

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

export async function getExercices(req: Request, res: Response) {
  const result = await repos.findMany();
  try {
    if (result.rowCount === 0) {
      return res.sendStatus(404);
    }

    return res.status(200).send(result.rows);
  } catch {
    return res.sendStatus(500);
  }
}

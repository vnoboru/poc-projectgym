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

export async function updateExercice(req: Request, res: Response) {
  const update = req.body as Exercice;
  const { error } = exerciceSchema.validate(update);

  if (error) {
    return res.status(400).send({
      message: error.message,
    });
  }

  try {
    const updateData = await repos.updateUnique(update);

    if (updateData.rowCount === 0) {
      return res.sendStatus(404);
    }

    return res.sendStatus(200);
  } catch {
    return res.sendStatus(500);
  }
}

export async function deleteExercice(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const deleteData = await repos.deleteUnique(Number(id));

    if(deleteData.rowCount === 0){
      return res.sendStatus(404);
    }

    return res.sendStatus(204);
  } catch {
    return res.sendStatus(500);
  }
}

export async function findExercice(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const exercices = await repos.findUnique(Number(id));

    if(exercices.rowCount === 0){
      return res.sendStatus(404);
    }

    return res.send(exercices.rows);
    } catch {
      return res.sendStatus(500);
    }
}
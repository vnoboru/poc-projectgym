import { StringRegexOptions } from "joi";
import { Query, QueryResult } from "pg";
import connection from "../db/database.js";
import { Exercice } from "../protocols/Exercice.js";

export async function insertUnique(exercice: Exercice): Promise<QueryResult> {
  return await connection.query(
    `
    INSERT INTO
        exercices
        (title, "bodyPart")
    VALUES
        ($1, $2)
    `,
    [exercice.title, exercice.bodyPart]
  );
}

export async function findMany(): Promise<QueryResult> {
  return await connection.query(
    `
    SELECT
      *
    FROM
      exercices
    `
  );
}

export async function updateUnique(exercice: Exercice): Promise<QueryResult> {
  return await connection.query(
    `
    UPDATE
      exercices
    SET
      title = $1, "bodyPart" = $2
    WHERE
      id = $3
    `,
    [exercice.title, exercice.bodyPart, exercice.id]
  );
}

export async function deleteUnique(id: Number): Promise<QueryResult> {
  return await connection.query(
    `
    DELETE FROM
      exercices
    WHERE
      id = $1
    `,
    [id]
  );
}

export async function findUnique(id: Number): Promise<QueryResult> {
  return await connection.query(
    `
    SELECT * FROM
      exercices
    WHERE
      id = $1;
    `,
    [id]
  )
}
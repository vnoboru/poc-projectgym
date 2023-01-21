import { QueryResult } from "pg";
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

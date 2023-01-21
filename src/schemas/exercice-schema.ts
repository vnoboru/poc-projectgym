import joi from "joi";

export const exerciceSchema = joi.object({
  id: joi.number(),
  title: joi.string().required(),
  bodyPart: joi.string().required(),
});

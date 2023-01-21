import joi from "joi";

export const exerciceSchema = joi.object({
  title: joi.string().required(),
  bodyPart: joi.string().required(),
});

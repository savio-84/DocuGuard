import { AppError } from "../../../errors/AppError";
import { NextFunction, Request, Response } from "express";
import { Schema } from 'zod';

export const zodValidation = (schema: Schema<any>) => (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const result = schema.safeParse({
    body: request.body,
    query: request.query,
    params: request.params,
  });



  if (result.success === false) {
    console.error('⚠  Invalid variables!', result.error.format());
    throw new AppError('⚠  Invalid variables!');
  }

  next();
}
import { z } from 'zod';

export const defaultStringValidator = z.string().refine((text) => {
  const regex = new RegExp(/(SELECT |INSERT |UPDATE |DELETE |CREATE |ALTER |DROP | AND | OR )/i);
  return !regex.test(text);
});

export const emailStringValidator = z.string().email().refine((text) => {
  const regex = new RegExp(/(SELECT |INSERT |UPDATE |DELETE |CREATE |ALTER |DROP | AND | OR )/i);
  return !regex.test(text);
});

export const passwordStringValidator = z.string().min(8).refine((text) => {
  const regex = new RegExp(/(SELECT |INSERT |UPDATE |DELETE |CREATE |ALTER |DROP | AND | OR )/i);
  return !regex.test(text);
});

export const uuidStringValidator = z.string().uuid().refine((text) => {
  const regex = new RegExp(/(SELECT |INSERT |UPDATE |DELETE |CREATE |ALTER |DROP | AND | OR )/i);
  return !regex.test(text);
});
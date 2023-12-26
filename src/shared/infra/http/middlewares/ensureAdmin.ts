import { AppError } from '../../../errors/AppError';
import { accountsRepository } from '../../../container';
import { NextFunction, Request, Response } from 'express';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { id } = request.user;
  // const adminsRepository = new AdminsRepository();
  const admin = await accountsRepository.get(id);
  if (!admin.isAdmin) throw new AppError("Only admins are allowed!");
  if (admin) request.isAdmin = true;
  else request.isAdmin = false;
  next();
}
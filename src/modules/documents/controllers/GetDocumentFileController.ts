import { Request, Response } from "express";
import { GetDocumentRequestType } from "../schemas/GetDocumentSchema";
import { getDocumentService } from "../../../shared/container";
import path from 'path';
import { AppError } from "../../../shared/errors/AppError";
import { createDecipheriv, randomBytes } from 'node:crypto';
import cryptography from '../../../config/cryptography';
import { localStorageProvider } from '../../../shared/container/index';
import fs from 'fs';
import { decrypt } from '../../../shared/utils/Cryptography';
import crypto from 'crypto';
export class GetDocumentFileController {
  public static async handle(request: Request<GetDocumentRequestType>, response: Response): Promise<void> {
    const { id } = request.params;
    const userId = request.user.id;

    const document = await getDocumentService.execute(id, userId);
    decrypt(path.resolve('temp', 'files', document.fileUrl), path.resolve('temp', document.fileUrl));

    return response
      .status(200)
      .sendFile(path.resolve('temp', document.fileUrl), { headers: { 'X-Custom-Header': '123' }, lastModified: false, etag: false }, (error: Error) => {
        if (error) throw new AppError(error.message, 400);
        else fs.unlinkSync(path.resolve('temp', document.fileUrl));
      });
      
  }
} 
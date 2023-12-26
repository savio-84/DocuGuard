import multer from 'multer';
import {resolve} from 'path';
import {randomBytes} from 'crypto';

const tmpFolder = resolve(__dirname, '..', '..', 'temp');

export default {
    tmpFolder,
  
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename: (request, file, callback) => {
        const fileHash = randomBytes(16).toString("hex");
        const fileName = `${fileHash}-${file.originalname}`;
  
        return callback(null, fileName);
      },
    }),
  };
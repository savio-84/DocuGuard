import fs from 'fs';
import crypto from 'node:crypto';
import cryptography from '../../config/cryptography';
import path from 'path';

// function encrypt(inputFile: fs.PathLike, outputFile: fs.PathLike) {
//   const reader = fs.createReadStream(inputFile);
//   const writer = fs.createWriteStream(outputFile);

//   const cipher = crypto.createCipheriv(cryptography.algorithm, cryptography.key, cryptography.iv);

//   reader.pipe(cipher).pipe(writer);

//   writer.on('finish', () => {
//     console.log('Arquivo criptografado com sucesso.');
//   });
// }

function encrypt(inputFile: fs.PathLike, outputFile: fs.PathLike) {
 
 // Creating Cipheriv with its parameter
 let cipher = crypto.createCipheriv(
      'aes-256-cbc', Buffer.from(cryptography.key), cryptography.iv);
 
 // Updating text
 let encrypted = cipher.update(fs.readFileSync(inputFile));
 
 encrypted = Buffer.concat([encrypted, cipher.final()]);

  fs.writeFileSync(outputFile, encrypted);
}

function decrypt(inputFile: fs.PathLike, outputFile: fs.PathLike) {
  let cipher = crypto.createDecipheriv(
      'aes-256-cbc', Buffer.from(cryptography.key), cryptography.iv);
  let encrypted = cipher.update(fs.readFileSync(inputFile));
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  fs.writeFileSync(outputFile, '');
  fs.writeFileSync(outputFile, encrypted);
}

export { encrypt, decrypt }
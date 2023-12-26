import crypto from 'node:crypto';
export default {
  algorithm: 'aes-256-cbc',
  // key: process.env.CRYPTO_KEY || 'a_random_key',
  key: crypto.createHash('sha256').update(String(process.env.CRYPTO_KEY)).digest('base64').substring(0, 32),
  type: 'hex',
  encoding: 'utf8',
  iv: Buffer.from(process.env.VI, 'hex'),
}
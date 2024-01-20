import crypto from 'crypto';
import bcrypt from 'bcrypt';

const encryptionKey: Buffer = crypto.scryptSync('passphrase', 'salt', 32); // Deriving a secure encryption key using scrypt
const iv: Buffer = crypto.randomBytes(16); // 16 bytes for AES-256-GCM

type GenerationType = 'number' | 'string' | 'alphanumeric' | 'both';

/**
 * Generates a random number of specified digits and type
 * @param {number} numberOfDigits - Number of digits to be generated
 * @param {GenerationType} type - Type of generation (number, string, alphanumeric, both)
 * @returns {string} - The generated random value
 */
function generateRandomKey(numberOfDigits: number, type: GenerationType): string {
  const validCharacters: string = {
    'number': '0123456789',
    'string': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    'alphanumeric': '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    'both': '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  }[type];

  return Array.from({ length: numberOfDigits }, () => validCharacters[Math.floor(Math.random() * validCharacters.length)]).join('');
}

/**
 * Encrypts the given plaintext password using bcrypt
 * @param {string} myPlaintextPassword - Text to be encrypted
 * @param {number} saltRounds - Number of rounds of encryption (more rounds = more secure, but slower to compute), recommended: 10 (default), max: 31
 * @returns {Promise<string>} - A one-way encryption of the password
 */
async function encryptPassword(myPlaintextPassword: string, saltRounds: number = 10): Promise<string> {
  try {
    return await bcrypt.hash(myPlaintextPassword, saltRounds);
  } catch (error: any) {
    console.error("\x1b[31m", error as string);
    throw new Error(error);
  }
}

/**
 * Encrypts the given plaintext password using SHA-256
 * @param {string} myPlaintextPassword - Text to be encrypted
 * @returns {string} - The hashed password
 */
function permanentEncryptPassword(myPlaintextPassword: string): string {
  try {
    return crypto.createHash('sha256').update(myPlaintextPassword, 'utf-8').digest('hex');
  } catch (error: any) {
    console.error("\x1b[31m", error as string);
    throw new Error(error);
  }
}


/**
 * Compares a password with its hashed version
 * @param {string} password - Text to be compared
 * @param {string} hashedPassword - Text to be compared to
 * @returns {Promise<boolean>} - Whether the passwords match or not
 */
async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
  try {
    return await permanentEncryptPassword(password) === hashedPassword;
  } catch (error: any) {
    console.error("\x1b[31m", error as string);
    throw new Error(error);
  }
}

type ValidEncryptionAlgorithm = 'aes-256-gcm' | 'aes-128-gcm' | 'aes-192-gcm';

/**
 * Encrypts data using AES-256-GCM or any other encryption algorithm
 * @param {string} newData - Data to be encrypted
 * @param {string} encryptionAlg - ONLY USE IF YOU KNOW WHAT YOU ARE DOING - Encryption algorithm to be used, default: aes-256-gcm
 * @returns {Promise<{ encryptedData: string, authTag: Buffer }>} - Encrypted data and authentication tag
 */
async function encryptData(
  newData: string,
  encryptionAlg?: ValidEncryptionAlgorithm
): Promise<{ encryptedData: string; authTag: Buffer }> {
  try {
    const encryptionAlgorithm: ValidEncryptionAlgorithm = encryptionAlg || 'aes-256-gcm';

    const cipher: crypto.CipherGCM = crypto.createCipheriv(encryptionAlgorithm, encryptionKey, iv);
    const encryptedData: string = cipher.update(newData, 'utf8', 'hex') + cipher.final('hex');
  
    // Get the authentication tag
    const authTag: Buffer = cipher.getAuthTag();
  
    return { encryptedData, authTag };
  } catch (error: any) {
    console.error("\x1b[31m", error as string);
    throw new Error(error);
  }
}


/**
 * Decrypts data using AES-256-GCM
 * @param {string} encryptedData - Encrypted data
 * @param {Buffer} authTag - Authentication tag
 * @returns {Promise<string>} - Decrypted data
 */
async function decryptData(encryptedData: string, authTag: Buffer): Promise<string> {
  try {
    const decipher: crypto.DecipherGCM = crypto.createDecipheriv('aes-256-gcm', encryptionKey, iv);
    decipher.setAuthTag(authTag);
  
    return decipher.update(encryptedData, 'hex', 'utf8') + decipher.final('utf8');
  } catch (error: any) {
    console.error("\x1b[31m", error as string);
    throw new Error(error);
  }
}

/**
 * Encrypts the IP address
 * @param {string} ip - IP address to be encrypted
 * @returns {string} - Encrypted IP address
 */
function encryptIP(ip: string): string {
  try {
    return ip.split('.').map(part => parseInt(part, 10).toString(16)).join('');
  } catch (error: any) {
    console.error("\x1b[31m", error as string);
    throw new Error(error);
  }
}

// Export all the functions as a single object with a common name
const encrypts: object = {
  generateRandomKey,
  encryptPassword,
  comparePassword,
  encryptData,
  decryptData,
  encryptIP,
  permanentEncryptPassword,
};

export {
  generateRandomKey,
  encryptPassword,
  comparePassword,
  encryptData,
  decryptData,
  encryptIP,
  permanentEncryptPassword,
};

export default encrypts
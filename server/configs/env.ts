import dotenv from 'dotenv';

dotenv.config({ path: './server/configs/credentials.env.local' });

/**
 * The URI for the MongoDB database.
 */
const URI: string | undefined = process.env.MONGODB_URI! || undefined;
/**
 * The name of the client database.
 */
const CLIENT_DB: string | undefined = process.env.CLIENT_DB! || undefined;

/**
 * The ID of the client.
 */
const CLIENT_ID: string | undefined = process.env.CLIENT_ID! || undefined;

/**
 * The hostname of the application.
 */
const APP_HOSTNAME: string = process.env.APP_HOSTNAME! || "localhost";

/**
 * The port number for the server.
 */
const SERVER_PORT: number = parseInt(process.env.SERVER_PORT!) || 3001;

/**
 * The port number for the client.
 */
const CLIENT_PORT: number = parseInt(process.env.CLIENT_PORT!) || 3000;

/**
 * The client secret.
 */
const CLIENT_SECRET: string | undefined = process.env.CLIENT_SECRET || undefined;

export const envs = {
    URI,
    CLIENT_DB,
    CLIENT_ID,
    APP_HOSTNAME,
    SERVER_PORT,
    CLIENT_PORT,
    CLIENT_SECRET
};

export {
    URI,
    CLIENT_DB,
    CLIENT_ID,
    APP_HOSTNAME,
    SERVER_PORT,
    CLIENT_PORT,
    CLIENT_SECRET
}

export default envs;
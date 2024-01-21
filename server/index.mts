// index.mts
import bodyParser from 'body-parser';
import ConnectMongoDBSession from 'connect-mongodb-session';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import mongodb from 'mongodb';
import passport from './modules/authModule.mts';
import path from 'path';
import url from 'url';
import envs from './configs/env.mts';
import encrypts from './modules/encryption.mts';
import mongoFuncs from './modules/mongoDB.mts';

// Type/Interface Declarations
interface GoogleUser {
  googleId: string;
  displayName: string;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  password: string;
  createdAt: string;
}

interface NewUser {
  googleId: string;
  displayName: string;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  password: string | null;
  createdAt: string;

}

// Express Initialization
const app: express.Express = express();

// File Path Initialization
const __filename: string = url.fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

// Library Initialization
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.set('trust proxy', true);

// Environment Initialization
const PORT: number = envs.SERVER_PORT;
const URI: string | undefined = envs.URI;
const CLIENT_DB: string | undefined = envs.CLIENT_DB;
const CLIENT_ID: string | undefined = envs.CLIENT_ID;
const CLIENT_SECRET: string | undefined = envs.CLIENT_SECRET;
const COLLECTION: string | undefined = envs.COLLECTION;

switch (true) {
  case !URI:
    throw new Error("MongoDB URI is not defined");
  case !CLIENT_DB:
    throw new Error("MongoDB client database is not defined");
  case !CLIENT_ID:
    throw new Error("Client ID is not defined");
  case !CLIENT_SECRET:
    throw new Error("Client secret is not defined");
  case !COLLECTION:
    throw new Error("Collection is not defined");
}

// MongoDB Initialization
const SECRET: string = encrypts.permanentEncryptPassword(encrypts.generateRandomKey(256, 'alphanumeric'));
const MongoDBStore = ConnectMongoDBSession(session);

app.use(session({
  secret: SECRET,
  resave: false,
  saveUninitialized: true,
  store: new MongoDBStore({
    uri: URI,
    collection: COLLECTION,
    expires: 1000 * 60 * 60 * 24 * 7,
    databaseName: CLIENT_DB,
    idField: '_id',
    expiresKey: 'expires',
    expiresAfterSeconds: 1000 * 60 * 60 * 24 * 7
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}));

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});

// Passport Initialization
app.use(passport.initialize());
app.use(passport.session());

// Passport Initialization - Google Auth Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  async (req: express.Request, res: express.Response) => {
    // If the user is of a valid domain, redirect to the dashboard. If not, redirect to the login page.
    // If the user is of a valid domain and doesn't exist in the database, add them to the database.
    try {
      // Typecast req.user to the correct type
      const userGoogle: GoogleUser = req.user as GoogleUser;
      const validEmailDomains: string[] = ["auhsd.us", "student.auhsd.us"];

      const userInDB: string = await mongoFuncs.getItemsFromDatabase(COLLECTION!, false, { googleId: userGoogle.googleId });

      if (!userInDB && validEmailDomains.includes(userGoogle.email.split("@")[1])) {
        const newUser: NewUser = {
          googleId: userGoogle.googleId,
          displayName: userGoogle.displayName,
          firstName: userGoogle.firstName,
          lastName: userGoogle.lastName,
          image: userGoogle.image,
          email: userGoogle.email,
          password: null,
          createdAt: new Date().toISOString(),
        };

        await mongoFuncs.writeToDatabase(newUser as unknown as mongodb.OptionalId<Document>, COLLECTION!, false);
        res.redirect('/dashboard');
      } else {
        res.redirect('/dashboard');
      }
    } catch (err: unknown) {
      console.error(err as string);
      throw new Error(err as string);
    }
  });

// Passport Initialization - Local Auth Routes
app.post('/auth/login', passport.authenticate('local', { failureRedirect: '/login' }), (req: express.Request, res: express.Response) => {
  res.redirect('/dashboard');
});


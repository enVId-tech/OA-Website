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
const SITE_ADMIN_ROUTE: string = envs.SITE_ADMIN_ROUTE;

// Environment Error Handling
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

// Passport Initialization
app.use(passport.initialize());
app.use(passport.session());

// Passport Initialization - Google Auth Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), async (req: express.Request, res: express.Response): Promise<number> => {
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
      res.redirect(`${SITE_ADMIN_ROUTE}/dashboard`);
      return 0;
    } else if (userInDB) {
      res.redirect(`${SITE_ADMIN_ROUTE}/dashboard`);
      return 0;
    }

    res.redirect('/admin/login');
    return 1;
  } catch (err: unknown) {
    console.error(err as string);
    throw new Error(err as string);
  }
});

// Passport Initialization - Local Auth Routes
app.post('/auth/login', passport.authenticate('local', { failureRedirect: '/admin/login' }), (req: express.Request, res: express.Response): void => {
  res.redirect(`${SITE_ADMIN_ROUTE}/dashboard`);
});

// Routes - GET, POST, PUT, DELETE
app.get(`${SITE_ADMIN_ROUTE}/`, (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});





// React Static Serve
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('*', (req: express.Request, res: express.Response) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Server Initialization
app.listen(PORT, (): void => {
  console.log(`Server listening on port ${PORT}`);
});

// Check if server initialized
if (!app) {
  throw new Error("Server failed to initialize");
}

// Server Error Handling
process.on('uncaughtException', async (err: Error): Promise<void> => {
  try {
    console.warn('\x1b[33m%s\x1b[0m', err as unknown as string);

    await mongoFuncs.deleteFromDatabase({}, COLLECTION!, "many", false);

    await mongoose.disconnect();
  } catch (err: unknown) {
    console.error(err as string);
  } finally {
    process.exit(1);
  }
});

// Server Shutdown Handling
process.on("SIGINT", async (): Promise<void> => {
  try {
    console.warn('\x1b[33m%s\x1b[0m', "Shutting down server...");

    await mongoFuncs.deleteFromDatabase({}, COLLECTION!, "many", false);

    await mongoose.disconnect();
  } catch (err: unknown) {
    console.error(err as string);
    process.exit(1);
  } finally {
    process.exit(0);
  }
});
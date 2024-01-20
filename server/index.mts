import bodyParser from 'body-parser';
import ConnectMongoDBSession from 'connect-mongodb-session';
import cors from 'cors';
import express from 'express';
import session from 'express-session';
import mongoose from 'mongoose';
import passport from 'passport';
import passportLocal from 'passport-local';
import GoogleStrategy from 'passport-google-oauth20';
import path from 'path';
import url from 'url';
import env from './configs/env';
import encrypts from './modules/encryption';
import mongoFuncs from './modules/mongoDB';

const app: express.Express = express();

// Library Initalization

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});
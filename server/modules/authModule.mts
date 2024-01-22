// authModule.ts
import passport, { DoneCallback } from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import passportLocal from 'passport-local'; // Add passport-local import
import envs from '../configs/env.mts';
import mongoFuncs from './mongoDB.mts';
import encrypts from './encryption.mts';

switch (true) {
  case !envs.CLIENT_ID:
    throw new Error("Client ID is not defined");
  case !envs.CLIENT_SECRET:
    throw new Error("Client secret is not defined");
  case !envs.COLLECTION:
    throw new Error("Collection is not defined");
}

// Passport Initalization - Google Strategy
passport.use(new GoogleStrategy.Strategy({
  clientID: envs.CLIENT_ID,
  clientSecret: envs.CLIENT_SECRET,
  callbackURL: `http://${envs.APP_HOSTNAME}:${envs.SERVER_PORT}/auth/google/callback`
},
  async (accessToken: any, refreshToken: any, profile: any, done: any): Promise<DoneCallback> => {
    try {
      const user: any = await mongoFuncs.getItemsFromDatabase(envs.COLLECTION!, false, { googleId: profile.id });
      if (!user) {
        const newUser: any = {
          googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value,
          email: profile.emails[0].value,
          password: null,
          createdAt: new Date().toISOString(),
        };
        await mongoFuncs.writeToDatabase(newUser, envs.COLLECTION!, false);
        return done(null, newUser);
      }
      return done(null, user);
    } catch (error: any) {
      return done(error as string, null);
    }
  }
));

passport.serializeUser((user: any, done: any): void => {
  done(null, user._id);
});

passport.deserializeUser(async (id: any, done: any): Promise<void> => {
  try {
    const user: any = await mongoFuncs.getItemsFromDatabase(envs.COLLECTION!, false, { _id: id });
    done(null, user);
  } catch (error: any) {
    done(error as string, null);
  }
});

// Passport Initalization - Local Strategy
passport.use(new passportLocal.Strategy({ usernameField: 'email' }, async (email: string, password: string, done: any): Promise<DoneCallback> => {
  try {
    const user: any = await mongoFuncs.getItemsFromDatabase(envs.COLLECTION!, false, { email: email });
    if (!user) {
      return done(null, false, { message: 'Incorrect email.' });
    }
    const match: boolean = await encrypts.comparePassword(password, user.password);
    if (!match) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  } catch (error: any) {
    return done(error as string, null);
  }
}
));

export default passport;

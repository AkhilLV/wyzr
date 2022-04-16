const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

const { GOOGLE_CLIENT_ID, SERVER_URL, GOOGLE_CLIENT_SECRET } = require("./config");

const User = require("./models/User");

passport.use(new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: `${SERVER_URL}/auth/google/callback`,
    passReqToCallback: true,
  },
  ((request, accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id }, (err, user) => {
      if (user) return done(err, user);
      User.create({
        googleId: profile.id,
        email: profile.email,
        username: profile.given_name,
      }, (err, user) => done(err, user));
    });
  }),
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

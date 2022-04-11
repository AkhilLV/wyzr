const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

const User = require("./models/User");

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://pure-hamlet-46555.herokuapp.com/auth/google/callback",
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

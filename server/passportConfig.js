const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:4000/auth/google/callback",
    passReqToCallback: true,
  },
  ((request, accessToken, refreshToken, profile, done) => {
    // User.findOrCreate({ googleId: profile.id }, (err, user) => done(err, user));
    console.log(profile);
    return done(null, profile);
  }),
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

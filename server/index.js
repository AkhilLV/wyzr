const express = require("express");
const session = require("express-session");
const passport = require("passport");
require("./passportConfig");

require("dotenv").config();

const SearchRoute = require("./routes/Search");

const app = express();
const PORT = process.env.PORT || 4000;

function isLoggedIn(req, res, next) {
  req.user ? next() : res.status(401).send({ message: "not_logged_in" });
}

app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] }),
);

app.use("/searches", SearchRoute);

app.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`));

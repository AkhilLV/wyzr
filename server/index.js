const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const passport = require("passport");
require("./passportConfig");

const SearchRoute = require("./routes/Search");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: process.env.REACT_CLIENT_URL,
    credentials: true,
  }),
);

app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] }),
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: `${process.env.REACT_CLIENT_URL}/search`,
    failureRedirect: "/auth/google/failure",
  }),
);

app.get("/auth/google/failure", (req, res) => {
  res.status(401).send({ message: "auth_failed" });
});

app.get("/auth/google/success", (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.status(400).send({ message: "auth_failed" });
  }
});

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    return next();
  }
  res.status(401).send({ message: "not_logged_in" });
};

app.use("/searches", isLoggedIn, SearchRoute);

const { CONNECTION_URL } = process.env;

async function main() {
  await mongoose.connect(CONNECTION_URL);
  app.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`));
}

main();

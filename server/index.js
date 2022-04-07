const express = require("express");
const session = require("express-session");
require("dotenv").config();

const cors = require("cors");

const passport = require("passport");
require("./passportConfig");

const SearchRoute = require("./routes/Search");

const app = express();
const PORT = process.env.PORT || 4000;

function isLoggedIn(req, res, next) {
  req.user ? next() : res.status(401).send({ message: "not_logged_in" });
}

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

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

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/search",
    failureRedirect: "/auth/google/failure",
  }),
);

app.get("/auth/google/failure", (req, res) => {
  res.send("Failed to authenticate..");
});

app.use("/searches", SearchRoute);

app.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`));

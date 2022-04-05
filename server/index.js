const express = require("express");

const AuthRoute = require("./routes/Auth");
const SearchRoute = require("./routes/Search");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", AuthRoute);
app.use("/searchs", SearchRoute);

app.listen(PORT, () => console.log(`Server is running at PORT: ${PORT}`));

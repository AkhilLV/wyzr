let config;
if (process.env.NODE_ENV === "production") {
  config = {
    REACT_CLIENT_URL: process.env.REACT_CLIENT_URL,
    SESSION_SECRET: process.env.SESSION_SECRET,
    CONNECTION_URL: process.env.CONNECTION_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    SERVER_URL: process.env.SERVER_URL,
  };
} else {
  config = {
    REACT_CLIENT_URL: "http://localhost:3000",
    SESSION_SECRET: process.env.SESSION_SECRET,
    CONNECTION_URL: process.env.CONNECTION_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    SERVER_URL: "http://localhost:4000",
  };
}

module.exports = config;

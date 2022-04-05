const sqlite3 = require("sqlite3");

const dbFilePath = `${__dirname}/users.db`;
const db = new sqlite3.Database(dbFilePath, (error) => {
  if (error) {
    console.log("Could not connect to database");
    throw error;
  } else {
    console.log("Connected to database");
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULl
  )
`);

db.run("PRAGMA foreign_keys = ON");

db.run(`
    CREATE TABLE IF NOT EXISTS search_history (
      search_history_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      query TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(user_id)
    )
`);

module.exports = db;

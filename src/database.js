const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(":memory:", (err) => {
  if (err) console.error("Error connecting to DB", err);
  else console.log("Connected to in-memory SQLite DB");
});

db.serialize(() => {
  db.run(`CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)`);
  db.run(`INSERT INTO users (name, age) VALUES ('Alice', 25), ('Bob', 30)`);
});

module.exports = db;

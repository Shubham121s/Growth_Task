const db = require("../database");
const { parseNaturalQuery } = require("../utils/queryParser");

exports.handleQuery = (req, res) => {
  const { query } = req.body;
  const sqlQuery = parseNaturalQuery(query);

  if (sqlQuery === "Invalid Query") {
    return res.status(400).json({ error: "Invalid query syntax" });
  }

  db.all(sqlQuery, [], (err, rows) => {
    if (err) return res.status(500).json({ error: "Database error" });
    res.json({ query: sqlQuery, result: rows });
  });
};

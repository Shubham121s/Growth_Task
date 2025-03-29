const { parseNaturalQuery } = require("../utils/queryParser");


exports.validateQuery = (req, res) => {
    const { query } = req.body;
    const sqlQuery = parseNaturalQuery(query);
  
    res.json({ valid: sqlQuery !== "Invalid Query", sql: sqlQuery });
  };
  
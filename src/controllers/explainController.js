const { parseNaturalQuery } = require("../utils/queryParser");


// exports.explainQuery = (req, res) => {
//     const { query } = req.query;  

//     if (!query) {
//         return res.status(400).json({ error: "Query parameter is required" });
//     }

//     const sqlQuery = parseNaturalQuery(query);

//     if (sqlQuery === "Invalid Query") {
//         return res.status(400).json({ error: "Invalid query" });
//     }

//     res.json({ explanation: `This query fetches records matching the criteria: ${sqlQuery}` });
// };


exports.explainQuery = (req, res) => {
    const query = req.query.query || req.body.query; // Support both GET and POST

    if (!query) {
        return res.status(400).json({ error: "Query parameter is required" });
    }

    const sqlQuery = parseNaturalQuery(query);

    if (sqlQuery === "Invalid Query") {
        return res.status(400).json({ error: "Invalid query" });
    }

    res.json({ explanation: `This query fetches records matching the criteria: ${sqlQuery}` });
};

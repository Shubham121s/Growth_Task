const parseNaturalQuery = (query) => {
  query = query.trim().toLowerCase();

  if (query.includes("users older than")) {
      const age = query.match(/\d+/)?.[0];  // Extract age value
      return age ? `SELECT * FROM users WHERE age > ${age}` : "Invalid Query";
  }

  // Allow SELECT queries as valid
  if (query.startsWith("select")) {
      return query;  // Return the query as is
  }

  return "Invalid Query";
};

module.exports = { parseNaturalQuery };

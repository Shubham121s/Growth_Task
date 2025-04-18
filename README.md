SQL Query Parser API

Overview

This is a simple Express.js API that processes natural language queries and converts them into SQL queries. It provides endpoints to parse, explain, and validate SQL queries.

Features

Converts natural language queries into SQL queries.

Explains the generated SQL query.

Validates query syntax.

Endpoints

1. Parse Query

Endpoint: POST /api/query
Description: Converts a natural language query into an SQL query.

2. Explain Query

Endpoint: GET /api/explain?query=SELECT * FROM users
Description: Explains the given SQL query.

3. Validate Query

Endpoint: POST /api/validate
Description: Checks if a given SQL query is valid.


Description: Converts a natural language query into an SQL query.
Project Structure
/mini-data-query-engine
│── controllers/
│   ├── queryController.js
│   ├── explainController.js
│   ├── validateController.js
│── utils/
│   ├── queryParser.js
│── routes/
│   ├── queryRoutes.js
│── server.js
│── package.json
│── README.md

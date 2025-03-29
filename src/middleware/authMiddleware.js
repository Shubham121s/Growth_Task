const authenticate = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token || token !== "Bearer secret_token") {
      return res.status(401).json({ error: "Unauthorized access" });
    }
    next();
  };
  
  module.exports = { authenticate };
  
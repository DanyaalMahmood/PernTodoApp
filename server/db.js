const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  password: "simtec",
  host: "localhost",
  port: 5000,
  database: "perntodo"
});

module.exports = pool;
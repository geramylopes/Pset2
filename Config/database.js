const Pool = require("pg").Pool;

const Todo = new Pool({
  user: "postgres",
  password: "Password1234",
  host: "localhost",
  port: 5432,
  database: "Todo_db"
});

module.exports = Pool;

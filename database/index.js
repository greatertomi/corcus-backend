const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'corcus',
  password: 'programmer',
  port: 5432
});

module.exports = pool;

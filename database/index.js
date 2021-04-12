const pg = require('pg');
require('dotenv').config();

const pool = new pg.Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false }
});

pool.connect((err) => {
  if (err) throw err;
  console.log('PostgreSQL connected...');
});

module.exports = pool;

const pool = require('../database');

exports.getPartners = (req, res) => {
  pool.query('SELECT * FROM partners', (error, results) => {
    if (error) {
      throw error;
    }
    res.json(results.rows);
  });
};

const util = require('util');
const { validationResult } = require('express-validator');

const pool = require('../database');
const { SERVER_ERROR } = require('../utils/constants');
const { generateId, getDateTime } = require('../utils/functions');

const query = util.promisify(pool.query).bind(pool);

exports.getPartners = async (req, res) => {
  try {
    const results = await query('SELECT * FROM partners');
    const partners = results.rows;
    for (const partner of partners) {
      const social = await query('SELECT * FROM socials WHERE partnerId = $1', [
        partner.id
      ]);
      partner.socials = social.rows.map((e) => e.account);
    }
    res.send(partners);
  } catch (err) {
    console.log(err);
    res.status(SERVER_ERROR.code).send(SERVER_ERROR.message);
  }
};

exports.createPartner = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, country, region, bio, socials } = req.body;
  const partnerId = generateId();
  const createdDateTime = getDateTime();

  try {
    await query(
      `INSERT INTO partners (id, name, email, country, region, bio, createddatetime) 
        VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [partnerId, name, email, country, region, bio, createdDateTime]
    );

    const promises = [];
    for (const social of socials) {
      const socialId = generateId();
      promises.push(
        query(
          'INSERT INTO socials (id, partnerId, account) VALUES ($1, $2, $3)',
          [socialId, partnerId, social]
        )
      );
    }
    await Promise.all(promises);
    res.send({ message: 'Partner created' });
  } catch (err) {
    console.log(err);
    res.status(SERVER_ERROR.code).send(SERVER_ERROR.message);
  }
};

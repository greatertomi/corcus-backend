const { check } = require('express-validator');

exports.createPartnerValidator = [
  check('name', 'Name is required').not().isEmpty(),
  check('country', 'Country is required').not().isEmpty(),
  check('email', 'email is required').not().isEmpty(),
  check('email', 'email not in proper format').isEmail(),
  check('region', 'region is required').not().isEmpty()
];

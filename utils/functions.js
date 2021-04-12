const moment = require('moment');
const { customAlphabet } = require('nanoid');

exports.generateId = () => {
  const chars =
    '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nanoid = customAlphabet(chars, 15);
  return nanoid();
};

exports.getDateTime = () => {
  const currentDateTime = String(moment().format('YYYY-MM-DD HH:mm:ss'));
  return currentDateTime;
};

require('dotenv').config()

module.exports = {
  PORT: process.env.PORT || 3333,
  DB_URL: process.env.DB_URL,
};

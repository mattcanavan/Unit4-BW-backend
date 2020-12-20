const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(
    process.env.NODE_ENV === 'production'
      ? knexConfig.production
      : knexConfig.development
  );

module.exports = db;

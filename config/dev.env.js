'use strict'
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');
const createEnvVariable = require('../build/utils').createEnvVariable;

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: createEnvVariable('API_ROOT', 'https://vvapiv2.wird.sehrgute.software'),
  CLIENT_SECRET: createEnvVariable('CLIENT_SECRET', 'D7DejqrJ0YyfzF79mSSne6C4TGe0NZue9lIdh4w2'),
  CLIENT_ID: createEnvVariable('CLIENT_ID', '1')
});

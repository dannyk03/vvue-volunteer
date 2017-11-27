'use strict'
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');
const createEnvVariable = require('../build/utils').createEnvVariable;

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: createEnvVariable('API_ROOT', 'http://api2.staging.volunteer-vision.com'),
  CLIENT_SECRET: createEnvVariable('CLIENT_SECRET', 'uJrcxY2UspB3iajG3wrLjUEpurZM5k2538PMgDcz'),
  CLIENT_ID: createEnvVariable('CLIENT_ID', '1')
});

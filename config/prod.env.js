'use strict'
const createEnvVariable = require('../build/utils').createEnvVariable;

module.exports = {
  NODE_ENV: '"production"',
  API_ROOT: createEnvVariable('API_ROOT', 'http://api2.staging.volunteer-vision.com'),
  CLIENT_SECRET: createEnvVariable('CLIENT_SECRET', ''),
  CLIENT_ID: createEnvVariable('CLIENT_ID', '')
};

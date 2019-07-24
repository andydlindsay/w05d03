const { Client } = require('pg');

const client = new Client({
  user: 'villains_user',
  password: 'password',
  host: 'localhost',
  database: 'villains'
});

client.connect();

module.exports = client;

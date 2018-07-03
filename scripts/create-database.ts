import { Client } from 'pg';
const ormconfig = require('../ormconfig');

const client = new Client({
  user: ormconfig.username,
  host: ormconfig.host,
  port: ormconfig.port,
  database: "postgres",
  password: ormconfig.password
});

client.connect()
  .then(() => client.query(`CREATE DATABASE ${ormconfig.database}`))
  .catch((_err) => console.log('Database probably exists!'))
  .then(() => process.exit(0));

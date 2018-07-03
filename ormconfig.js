/*
  If this configfile is rewritten as a *.ts file
  the following error is given by typeorm: MissingDriverError: Wrong driver: "undefined" given.
*/

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'typeorm_bug',
  logging: true,
  synchronize: false,
  entities: ['src/entities/*.ts'],
  migrations: ['src/migrations/*.ts'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations'
  }
};

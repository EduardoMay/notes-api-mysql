require("dotenv").config();

console.log(process.env.KNEX_ACQUIRE_CONNECTION_TIME_OUT);

module.exports = {
  development: {
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      port: process.env.D
    },
    migrations: {
      tableName: "migrations",
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    },
    acquireConnectionTimeout: process.env.KNEX_ACQUIRE_CONNECTION_TIME_OUT
  }
};

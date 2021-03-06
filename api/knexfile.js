module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.IB_PGHOST,
      database: process.env.IB_PGDATABASE,
      user: process.env.IB_PGUSER,
      password: process.env.IB_PGPASSWORD
    },
    pool: {
      min: 1,
      max: 4
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  staging: {
    client: "pg",
    connection: {
      host: process.env.IB_PGHOST,
      database: process.env.IB_PGDATABASE,
      user: process.env.IB_PGUSER,
      password: process.env.IB_PGPASSWORD
    },
    pool: {
      min: 1,
      max: 4
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "pg",
    connection: {
      host: process.env.IB_PGHOST,
      database: process.env.IB_PGDATABASE,
      user: process.env.IB_PGUSER,
      password: process.env.IB_PGPASSWORD,
      ssl: true
    },
    pool: {
      min: 0,
      max: 5,
      idleTimeoutMillis: 10000
    },
    acquireConnectionTimeout: 60000,
    migrations: {
      tableName: "knex_migrations"
    }
  }
};

// for furture reference https://stackoverflow.com/questions/19085609/trying-to-connect-my-node-js-to-heroku-postgresql-database-following-heroku-pos
const pgConnection = process.env.DATABASE_URL

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/project-database.db3',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: pgConnection,
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        directory: './database/migrations',
    },
    seeds: {
        directory: './database/seeds',
    },
}
};
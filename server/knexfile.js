module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/cocktail_world",
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
  },
};

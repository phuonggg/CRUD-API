exports.up = function (knex, Promise) {
  return knex.schema.createTable("cocktail", (table) => {
    table.increments();
    table.text("name").notNullable();
    table.text("image");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("cocktail");
};

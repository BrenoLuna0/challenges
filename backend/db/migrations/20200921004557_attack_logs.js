exports.up = function (knex) {
  return knex.schema.createTable("LOGS", (table) => {
    table.increments("id");
    table.string("message");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("LOGS");
};

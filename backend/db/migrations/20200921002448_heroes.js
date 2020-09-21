exports.up = function (knex) {
  return knex.schema.createTable("HEORES", (table) => {
    table.increments("id");
    table.string("name");
    table.string("rank");
    table.float("lat");
    table.float("lng");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("HEORES");
};

exports.up = async function (knex) {
  return await knex.schema.createTable("labels", function (table) {
    table.increments("id").primary();
    table.string("title", 255).notNullable();
    table.string("color", 25).notNullable().defaultTo("#92949c");
    table.datetime("created_at").defaultTo(knex.fn.now());
    table.datetime("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {};

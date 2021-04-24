exports.up = async function (knex) {
  return await knex.schema.createTable("users_app", function (table) {
    table.increments("id").primary();
    table.string("uid_device").unique().notNullable();
    table.datetime("created_at").defaultTo(knex.fn.now());
    table.datetime("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {};

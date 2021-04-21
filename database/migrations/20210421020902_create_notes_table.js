exports.up = async function (knex) {
  return await knex.schema.createTable("notes", function (table) {
    table.increments("id").primary();
    table.integer("id_label").unsigned().references("id").inTable("labels");
    table.string("title", 255).notNullable();
    table.text("description");
    table.tinyint("favorite").notNullable().defaultTo(0);
    table.datetime("created_at").defaultTo(knex.fn.now());
    table.datetime("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {};

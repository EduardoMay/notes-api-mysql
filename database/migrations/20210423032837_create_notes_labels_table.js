exports.up = async function (knex) {
  return await knex.schema.createTable("notes_labels", function (table) {
    table.increments("id").primary();
    table.integer("id_note").unsigned().references("id").inTable("notes");
    table.integer("id_label").unsigned().references("id").inTable("labels");
    table.datetime("created_at").defaultTo(knex.fn.now());
    table.datetime("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {};

exports.up = async function (knex) {
  await knex.schema.table("notes", function (table) {
    table.dropForeign("id_label");
  });
};

exports.down = function (knex) {};

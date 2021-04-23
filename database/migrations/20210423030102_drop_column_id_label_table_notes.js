exports.up = async function (knex) {
  return await knex.schema.table("notes", function (table) {
    table.dropColumn("id_label");
  });
};

exports.down = function (knex) {};

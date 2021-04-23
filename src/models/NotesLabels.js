import { Model } from "objection";
import knex from "../config/knex";
import { getDatetime } from "./../helpers/getDatetime";

Model.knex(knex);

export default class NotesLabels extends Model {
  static get tableName() {
    return "notes_labels";
  }

  $beforeInsert() {
    this.created_at = getDatetime();
  }

  $beforeUpdate() {
    this.updated_at = getDatetime();
  }

  static get jsonSchema() {
    return {
      require: ["id_note", "id_label"],
      properties: {
        id: { type: "integer" },
        id_note: { type: "integer" },
        id_label: { type: "integer" }
      }
    };
  }
}

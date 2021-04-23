import { Model } from "objection";
import knex from "../config/knex";
import { getDatetime } from "../helpers/getDatetime";
import Notes from "./Notes";

Model.knex(knex);

export default class Labels extends Model {
  static get tableName() {
    return "labels";
  }

  $beforeInsert() {
    this.created_at = getDatetime();
  }

  $beforeUpdate() {
    this.updated_at = getDatetime();
  }

  static get jsonSchema() {
    return {
      require: ["title", "color"],
      properties: {
        id: { type: "integer" },
        id_note: { type: "integer" },
        title: { type: "string" },
        color: { type: "string" },
        created_at: { type: "datetime" },
        updated_at: { type: "datetime" }
      }
    };
  }

  static get relationMappings() {
    return {
      notes: {
        relation: Model.ManyToManyRelation,
        modelClass: Notes,
        join: {
          from: "labels.id",
          through: {
            from: "notes_labels.id_label",
            to: "notes_labels.id_note"
          },
          to: "notes.id"
        }
      }
    };
  }
}

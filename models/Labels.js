import { Model } from "objection";
import knex from "../database/knex";

Model.knex(knex);

export default class Labels extends Model {
  static get tableName() {
    return "labels";
  }

  $beforeInsert() {
    this.created_at = this.getDatetime();
  }

  $beforeUpdate() {
    this.updated_at = this.getDatetime();
  }

  getDatetime() {
    const date = new Date();
    return `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
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
    const Notes = require("./Notes");

    return {
      parent_skus: {
        relation: Model.BelongsToOneRelation,
        modelClass: Notes,
        join: {
          from: "labels.id",
          to: "notes.id_label"
        }
      }
    };
  }
}

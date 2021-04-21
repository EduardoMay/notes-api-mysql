import { Model } from "objection";
import knex from "../../database/knex";

Model.knex(knex);

export default class Notes extends Model {
  static get tableName() {
    return "notes";
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
      require: ["title"],
      properties: {
        id: { type: "integer" },
        title: { type: "string" },
        description: { type: "text" },
        favorite: { type: "tinyint" },
        created_at: { type: "datetime" },
        updated_at: { type: "datetime" }
      }
    };
  }

  static get relationMappings() {
    const Labels = require("./Labels");

    return {
      labels: {
        relation: Model.HasManyRelation,
        modelClass: Labels,
        join: {
          from: "notes.id_label",
          to: "labels.id"
        }
      }
    };
  }
}

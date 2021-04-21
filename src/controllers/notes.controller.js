import { logDataAndQuery } from "../helpers/logDataAndQuery";
import Notes from "../models/Notes";

export const getAll = async (req, res) => {
  try {
    const data = await Notes.query().leftJoin(
      "labels",
      "labels.id",
      "notes.id_label"
    );

    const query = Notes.query()
      .leftJoin("labels", "labels.id", "notes.id_label")
      .toKnexQuery();

    logDataAndQuery(query, data);

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

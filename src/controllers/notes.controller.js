import { logDataAndQuery } from "../helpers/logDataAndQuery";
import Notes from "../models/Notes";

/**
 * Get all notes
 * @method GET
 * @param   {Request}   req
 * @param   {Response}  res
 */
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

/**
 * Save new label into database
 * @method POST
 * @param   {Request}   req
 * @param   {Response}  res
 */
export const post = async ({ body }, res) => {
  try {
    const { data } = body;

    const results = await Notes.query().insert(data);
    const query = Notes.query().insert(data).toKnexQuery();

    logDataAndQuery(query, results);

    res.status(200).json({ results });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

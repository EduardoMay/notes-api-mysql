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

/**
 * Delete note by id
 * @method DELETE
 * @param   {Request}   req
 * @param   {Response}  res
 */
export const deleteNote = async ({ params }, res) => {
  try {
    const { id } = params;

    const result = await Notes.query().deleteById(id);
    const query = Notes.query().deleteById(id).toKnexQuery();

    if (result === 0) {
      res
        .status(400)
        .json({ message: "Nose encontró registro en la base de datos" });
    } else {
      res.json(result);
    }

    logDataAndQuery(query, result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

/**
 * Update note by id
 * @method PATCH
 * @param   {Request}   req
 * @param   {Response}  res
 */
export const updateNote = async ({ body, params }, res) => {
  try {
    const { id } = params;
    const { data } = body;

    const result = await Notes.query().findById(id).patch(data);
    const query = Notes.query().findById(id).patch(data).toKnexQuery();

    if (result === 0) {
      res
        .status(400)
        .json({ message: "Nose encontró registro en la base de datos" });
    } else {
      res.json({ result });
    }

    logDataAndQuery(query, result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

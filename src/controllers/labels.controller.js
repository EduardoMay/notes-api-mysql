import { logDataAndQuery } from "../helpers/logDataAndQuery";
import Labels from "../models/Labels.js";

/**
 * Get all notes
 * @method GET
 * @param   {Request}   req
 * @param   {Response}  res
 */
export const getAll = async (req, res) => {
  try {
    const data = await Labels.query().withGraphFetched("notes");
    const query = Labels.query().withGraphFetched("notes").toKnexQuery();

    logDataAndQuery(query, data);

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

/**
 * Save new note into database
 * @method POST
 * @param   {Request}   req
 * @param   {Response}  res
 */
export const postLabel = async ({ body }, res) => {
  try {
    const { data } = body;

    const result = await Labels.query().insert(data);
    const query = Labels.query().insert(data).toKnexQuery();

    logDataAndQuery(query, result);

    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

/**
 * Update label by id
 * @method PATCH
 * @param   {Request}   req
 * @param   {Response}  res
 */
export const updateLabel = async ({ body, params }, res) => {
  try {
    const { id } = params;
    const { data } = body;

    const result = await Labels.query().findById(id).patch(data);
    const query = Labels.query().findById(id).patch(data).toKnexQuery();

    if (result === 0) {
      res
        .status(400)
        .json({ message: "Nose encontró registro en la base de datos" });
    } else {
      res.json({ result });
    }

    logDataAndQuery(query, result);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

/**
 * Delete label by id
 * @method DELETE
 * @param   {Request}   req
 * @param   {Response}  res
 */
export const deleteLabel = async ({ params }, res) => {
  try {
    const { id } = params;

    const result = await Labels.query().deleteById(id);
    const query = Labels.query().deleteById(id).toKnexQuery();

    if (result === 0)
      res
        .status(400)
        .json({ message: "Nose encontró registro en la base de datos" });
    else res.json({ result });

    logDataAndQuery(query, result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

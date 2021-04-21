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
    const data = await Labels.query();
    const query = Labels.query().toKnexQuery();

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
export const post = async ({ body }, res) => {
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

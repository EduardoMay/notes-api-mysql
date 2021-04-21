import { logDataAndQuery } from "../helpers/logDataAndQuery";
import Labels from "../models/Labels.js";

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

export const post = async ({ body }, res) => {
  try {
    const { data } = body;

    const result = await Labels.query().insertGraph(data);
    const query = Labels.query().insertGraph(data).toKnexQuery();

    logDataAndQuery(query, result);

    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

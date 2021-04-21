const Labels = require("../models/Labels");

const getAll = async (req, res) => {
  try {
    const data = await Labels.query();

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const post = async ({ body }, res) => {
  try {
    const { data } = body;

    const result = await Labels.query().insertGraph(data);

    console.log(result);
    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = {
  getAll,
  post
};

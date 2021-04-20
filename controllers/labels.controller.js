const Labels = require("../models/Labels");

const getAll = async (req, res) => {
  try {
    const data = await Notes.query();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAll
};

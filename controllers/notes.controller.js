const Notes = require("../models/Notes");

const getAll = async (req, res) => {
  try {
    const data = await Notes.query().withGraphFetched("labels");

    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAll
};

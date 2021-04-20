const getAll = (req, res) => {
  res.status(200).json({ message: "GET Notes" });
};

module.exports = {
  getAll
};

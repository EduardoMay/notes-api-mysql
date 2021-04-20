const getAll = (req, res) => {
  res.status(200).json({ message: "GET Labels" });
};

module.exports = {
  getAll
};

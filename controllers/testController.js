const testingController = (req, res) => {
  res.status(200).send("<h1>Wlcome to Todo App Server</h1>");
};

module.exports = { testingController };

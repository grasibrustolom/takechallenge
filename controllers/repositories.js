const getReposService = require("../services/repositories");

const getReposController = async (req, res, next) => {
  const response = await getReposService();
  let repositories = response.data;
  const quantity = 5;
  let data = {};

  repositories = repositories
    .filter((repoCSharp) => {
      return repoCSharp.language === "C#";
    })
    .splice(0, quantity);

  repositories.forEach((repo, index) => {
    data[index] = repo;
  });

  return res.status(200).send(
    data
  )
};


module.exports = getReposController;

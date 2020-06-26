const axios = require("axios");

const getReposService = async () => {
  const response = await axios.get(
    "https://api.github.com/orgs/takenet/repos?sort=created&direction=asc"
  );
  
  return response;
};

module.exports = getReposService;

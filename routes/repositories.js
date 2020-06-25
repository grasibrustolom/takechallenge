const express = require('express');
const app = require('../app');
const axios = require('axios');
const router = express.Router();

router.get('/',(req,res,next) => {

 
  axios.get("https://api.github.com/orgs/takenet/repos?sort=created&direction=asc").then(function (response) {
    // handle success

    let repositories = response.data;

    repositories = repositories.filter((repoCSharp) => { return repoCSharp.language === 'C#'; }).splice(0,5);

    res.status(200).send({
      // data: repositories
      first: repositories[0],
      second: repositories[1],
      third: repositories[2],
      fourth: repositories[3],
      fifth: repositories[4]
    })
    
  })
  .catch(function (error) {
    // handle error
    res.send({
        sucess: false,
        result: error
     })
  })
  .finally(function () {
    // always executed
  });


}); 


module.exports = router;
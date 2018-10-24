const request = require('request');

var options = {
  url: "http://api.github.com/orgs/JBossOutreach/repos",
  method: "GET",
  json: true,
  headers: {"User-Agent": "request"}
}

exports.getStar = repo => {
  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if(error){
        reject(error);
      }else {
        var stars = "";
        for(var i=0; i<body.length; i++){
          if(body[i].name.toLowerCase() == repo.toLowerCase()){
            stars += body[i]["stargazers_count"];
          }
        }
        if(!stars){
          reject("Error! Check repository name and try again");
        }
        resolve(stars);
      }
    });
  })
}

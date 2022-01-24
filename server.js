require('dotenv').config();
const express = require("express");
const axios = require('axios');
const path = require("path");
const ngApp = express();
ngApp.use(express.static("./dist/latest-news-lucky-okoedion"));

ngApp.get("/data/:endPoint", (req, res, next) => {
  let theUrl;
  if(req.params.endPoint == "jesus-route") {
    theUrl = `https://newsdata.io/api/1/news?apikey=${process.env.API_KEY}`;
  } else {
    theUrl = `https://newsdata.io/api/1/news?apikey=${process.env.API_KEY}` + `${req.params.endPoint}`;
  }
  axios.get(theUrl).then(result => {
    const theResult = result.data;
    res.send(theResult);
  })
});

ngApp.get("/", function (request, response) {
  response.sendFile(
    path.join(__dirname, "/dist/latest-news-lucky-okoedion/index.html")
  );
});



ngApp.listen(process.env.PORT || 8080);

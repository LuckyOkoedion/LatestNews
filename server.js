const express = require("express");
const path = require("path");
const ngApp = express();
ngApp.use(express.static("./dist/latest-news-lucky-okoedion"));
ngApp.get("/*", function (request, response) {
  response.sendFile(
    path.join(__dirname, "/dist/latest-news-lucky-okoedion/index.html")
  );
});
ngApp.listen(process.env.PORT || 8080);

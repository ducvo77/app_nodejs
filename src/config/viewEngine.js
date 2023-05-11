const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");

const configViewEngine = (app) => {
  //config template engine
  app.engine(".hbs", engine({ extname: ".hbs" }));
  app.set("view engine", ".hbs");
  app.set("views", path.join("src", "resources/views"));
  //Serves static files
  app.use(express.static(path.join("src", "public")));
};

module.exports = configViewEngine;

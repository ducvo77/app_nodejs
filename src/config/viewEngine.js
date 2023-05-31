import express from "express";
import { engine } from "express-handlebars";
import path from "path";

const configViewEngine = (app) => {
  //config template engine
  app.engine(".hbs", engine({ extname: ".hbs" }));
  app.set("view engine", ".hbs");
  app.set("views", path.join("src", "resources/views"));
  //Serves static files
  app.use(express.static(path.join("src", "public")));
};

module.exports = configViewEngine;

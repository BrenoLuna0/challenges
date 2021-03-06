const express = require("express");
const routes = express.Router();

const heroController = require("./controllers/heroController");
const logController = require("./controllers/logController");

routes.get("/", (req, res) => {
  res.send(
    "Seu sorriso é tão resplandecente que deixou meu coração alegre, me dê a mão pra fugir dessa terrível escuridão"
  );
});

routes.post("/hero", heroController.create);
routes.get("/hero", heroController.index);
routes.put("/hero", heroController.upadate);

routes.post("/log", logController.create);
routes.get("/log", logController.index);

module.exports = routes;

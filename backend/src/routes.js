const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.send(
    "Seu sorriso é tão resplandecente que deixou meu coração alegre, me dê a mão pra fugir dessa terrível escuridão"
  );
});

module.exports = routes;

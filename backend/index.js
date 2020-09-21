const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", require("./src/routes"));

app.listen(process.env.PORT, () => {
  console.log("Servidor ouvindo na porta 3333");
});

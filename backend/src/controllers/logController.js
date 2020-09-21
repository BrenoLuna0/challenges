const { orderBy } = require("../connection");
const knex = require("../connection");

module.exports = {
  async create(req, res) {
    const log = await knex("LOGS")
      .returning("*")
      .insert(req.body)
      .catch((err) => {
        console.log(err);
        return false;
      });

    return log
      ? res.status(200).json(log)
      : res.status(500).json({ error: true });
  },

  async index(req, res) {
    const logs = await knex("LOGS")
      .select("*")
      .orderBy("id", "desc")
      .limit(10)
      .catch((err) => {
        console.log(err);
        return false;
      });

    return logs
      ? res.status(200).json(logs)
      : res.status(500).json({ error: true });
  },
};

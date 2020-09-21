const knex = require("../connection");

module.exports = {
  async create(req, res) {
    const hero = await knex("HEORES")
      .returning("*")
      .insert(req.body)
      .catch((err) => {
        console.log(err);
        return false;
      });

    return hero
      ? res.status(200).json(hero)
      : res.status(500).json({ error: true });
  },

  async index(req, res) {
    const heroes = await knex("HEORES")
      .select("*")
      .catch((err) => {
        console.log(err);
        return false;
      });

    return heroes
      ? res.status(200).json(heroes)
      : res.status(500).json({ error: true });
  },

  async upadate(req, res) {
    const hero = await knex("HEORES")
      .returning("*")
      .where("id", req.body.id)
      .update({
        lat: req.body.lat,
        lng: req.body.lng,
      })
      .catch((err) => {
        console.log(err);
        return false;
      });

    return hero
      ? res.status(200).json(hero)
      : res.status(500).json({ error: true });
  },
};

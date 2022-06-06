const { sequelize } = require('../models');
const { Op } = require("sequelize");
const db = require('../models');
const City = db.cities;

exports.getAll = async (req, res) => {
    try {
        const name = req.query.name;
        const condition = name ? { nomCommune: { [Op.like]: `%${name}%` } } : null;
        const cities = await City.findAll(
        {
            where: condition,
            limit: 100 
        });
        res.send(cities);
    } catch(err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving cities."
        })
    }
}
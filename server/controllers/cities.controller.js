const { sequelize } = require('../models');
const { Op } = require("sequelize");
const db = require('../models');
const City = db.cities;

exports.getAll = async (req, res) => {
    try {
        const city = req.query.city;
        const condition = city ? { nomCommune: { [Op.like]: `%${city}%` } } : null;
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
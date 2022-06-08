const { sequelize } = require('../models');
const { Op } = require("sequelize");
const db = require('../models');
const City = db.cities;

exports.getAll = async (req, res) => {
    try {
        const city = req.query.city;
        const cities = await City.findAll(
        {
            where: {
                [Op.or]: [
                    {nomCommune: { [Op.like]: `%${city}%` }},
                    {codePostal:  { [Op.like]: `%${city}%` }}
                ]
            },
            limit: 100 
        }
        );
        res.send(cities);
    } catch(err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving cities."
        })
    }
}
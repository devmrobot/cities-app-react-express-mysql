const { Op } = require("sequelize");
const db = require('../models');
const City = db.cities;

exports.getAll = async (req, res) => {
    try {
        const city = req.query.city;
        if (city) {
            const metropole = await City.findAll(
                {
                    where: {
                        [Op.or]: [{nomCommune: { [Op.like]: `%${city}%` }}, {codePostal:  { [Op.like]: `%${city}%` }}],
                        [Op.and]: [{codePostal: {[Op.lt]: 96000}}]
                    },
                    limit: 100 
                }
                );
                const outremer = await City.findAll(
                {
                    where: {
                        [Op.or]: [{nomCommune: { [Op.like]: `%${city}%` }}, {codePostal:  { [Op.like]: `%${city}%` }}],
                        [Op.and]: [{codePostal: {[Op.gte]: 96000}}]
                    },
                    limit: 100 
                }
                );
                res.send({ outremer, metropole })
        }
        else {
            const cities = await City.findAll({ limit: 100 });
            res.send(cities);
        }
    } catch(err) {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving cities."
        })
    }
}
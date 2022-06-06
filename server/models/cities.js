import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const City = sequelize.define('City', {
    codePostal: DataTypes.NUMBER,
    codeCommune: DataTypes.DATE,
    nomCommune: DataTypes.STRING,
    libelleAcheminement: DataTypes.STRING,
});
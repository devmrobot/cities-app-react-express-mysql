module.exports = (sequelize, DataTypes) => {

    const City = sequelize.define('cities', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        codePostal: {
            type: DataTypes.INTEGER
          },
        codeCommune: {
            type: DataTypes.STRING
          },
        nomCommune: {
            type: DataTypes.STRING
          },
        libelleAcheminement: {
            type: DataTypes.STRING
          },
    }, {
        timestamps: false
    });
    return City;
}



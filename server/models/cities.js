module.exports = (sequelize, DataTypes) => {

    const City = sequelize.define('cities', {
        codePostal: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
        codeCommune: {
            type: DataTypes.STRING,
            allowNull: false
          },
        nomCommune: {
            type: DataTypes.STRING,
            allowNull: false
          },
        libelleAcheminement: {
            type: DataTypes.STRING,
            allowNull: false
          },
    });

    return City;
    
}



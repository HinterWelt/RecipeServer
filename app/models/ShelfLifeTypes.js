/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var ShelfLifeTypes = sequelize.define('ShelfLifeTypes', {
    ShelfLifeID: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ShelfLife: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'ShelfLifeTypes'
  });
  ShelfLifeTypes.associate = function(models) {
    ShelfLifeTypes.hasMany(models.Dish, {foreignKey:'ShelfLifeID'})
  };
  return ShelfLifeTypes;
};

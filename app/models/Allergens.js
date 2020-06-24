/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Allergens', {
    AllergenID: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true
    },
    IngredientID: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'Allergens'
  });
};

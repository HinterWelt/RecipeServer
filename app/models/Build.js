/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Build', {
    RecipeID: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Compeat: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    isPrep: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    IngredientID: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true
    },
    Quantity: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PortionID: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    Priority: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'Build'
  });
};

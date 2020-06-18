/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UtensilTypes', {
    UtensilID: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Utensil: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'UtensilTypes'
  });
};

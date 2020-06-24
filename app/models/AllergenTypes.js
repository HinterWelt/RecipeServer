/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AllergenTypes', {
    AllergenID: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Allergen: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'AllergenTypes'
  });
};

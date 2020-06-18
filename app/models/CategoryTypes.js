/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CategoryTypes', {
    CategoryID: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Category: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'CategoryTypes'
  });
};

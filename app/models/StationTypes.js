/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StationTypes', {
    StationID: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Station: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'StationTypes'
  });
};

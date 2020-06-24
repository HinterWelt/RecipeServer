/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PortionTypes', {
    PortionID: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Portion: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    DisplayAs: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: 'Fraction'
    }
  }, {
    tableName: 'PortionTypes'
  });
};

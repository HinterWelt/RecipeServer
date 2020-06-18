/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IPAddress_Access', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    ip_address: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    details: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    tableName: 'IPAddress_Access'
  });
};

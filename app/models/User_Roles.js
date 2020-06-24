/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User_Roles', {
    user_role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    role_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'User_Roles'
  });
};

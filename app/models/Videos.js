/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Videos', {
    VideoID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    URL: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Dept: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    Active: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'Videos'
  });
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DishPhotos', {
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
    PhotoPath: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'DishPhotos'
  });
};

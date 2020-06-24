/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Ingredients', {
    IngredientID: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ParentID: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: true
    },
    RecipeID: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: true
    },
    Revision: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    RevisionDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Compeat: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    DisplayName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    isPrep: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    isActive: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    isTest: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    StartDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    EndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    isDead: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'Ingredients'
  });
};

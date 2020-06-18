/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Dish', {
    RecipeID: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Revision: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    ParentID: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: true
    },
    Compeat: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    isPrep: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    DisplayName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    RevisionDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ShelfLife: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ShelfLifeID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Yield: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PortionID: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    StationID: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    CategoryID: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    CookTime: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: '00:00:00'
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
    tableName: 'Dish',
    timestamps: false
  });
};

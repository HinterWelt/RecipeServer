const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  define: {
    timestamps: false
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.dish = require("./Dish.js")(sequelize, Sequelize);
db.shelfType = require("./ShelfLifeTypes.js")(sequelize, Sequelize);



// db.sequelize.ShelfLifeTypes.hasMany(db.dish, {foreignKey: "ShelfLifeID", as: "shelfType"});
// db.sequelize.Dish.belongsTo(db.shelfType, {
//   foreignKey: "ShelfLifeID",
//   as: "dish",
// });
module.exports = db;
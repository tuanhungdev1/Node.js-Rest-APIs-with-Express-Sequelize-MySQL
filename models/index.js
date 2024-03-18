const Sequelize = require("sequelize");
const dbConfig = require("../configs/db.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAlias: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorial = require("../models/tutorial.model")(Sequelize, sequelize);

module.exports = db;

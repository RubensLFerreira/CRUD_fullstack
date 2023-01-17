const sequelize = require('../../config/sequelize'); // buscando o sequelize configurado
const Sequelize = require('sequelize');

const Curso = require('./curso'); // importando o modelo

const curso = Curso(sequelize, Sequelize.DataTypes); // meu modelo curso

const db = {
  curso,
  sequelize
};

module.exports = db;
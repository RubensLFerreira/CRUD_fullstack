const Sequelize = require('sequelize');
const configDatabase = require('./database');

const sequelize = new Sequelize(configDatabase);

try {
  sequelize.authenticate();
  console.log('A conexão foi estabelecida com sucesso!');
} catch (error) {
  console.error('Houve algum erro na conexão com o banco', error);
}

module.exports = sequelize;
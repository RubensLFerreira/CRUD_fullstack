const curso = (sequelize, DataTypes) => {
  const Curso = sequelize.define('Curso', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cargaHoraria: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    turno: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'curso'
  });
  return Curso;
};

module.exports = curso;
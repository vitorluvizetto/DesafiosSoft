'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Produtos.belongsTo(models.Categorias, {
        foreignKey: 'categoria_id'
      })
    }
  };
  Produtos.init({
    nome: DataTypes.STRING,
    preco: DataTypes.DECIMAL(10, 2)
  }, {
    sequelize,
    modelName: 'Produtos',
  });
  return Produtos;
};
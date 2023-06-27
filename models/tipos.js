const {DataTypes, Model} = require('sequelize')
const sequelize = require("../bd");
class Tipos extends Model{}
Tipos.init({
    descricao:{
       type:DataTypes.STRING(233),
       allowNull:true
    }
},{
    sequelize,
    modelName:'Tipos'
})
sequelize.sync()
module.exports = Tipos

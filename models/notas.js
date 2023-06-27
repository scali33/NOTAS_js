const {DataTypes, Model} = require('sequelize')
const sequelize = require("../bd");
const usuarios = new require ("./usuario")
const tipos = new require ("./tipos")
class Notas extends Model{}
Notas.init({
    descricao:{
        type:DataTypes.STRING(255),
        allowNull:false
    },
    prioridades:{
        type:DataTypes.STRING(255),
        allowNull:false
    },
    datacomeco:{
        type:DataTypes.STRING(24),
        allowNull:false
    },
    dataconclusao:{
        type:DataTypes.STRING(25),
        allowNull:false
    }
},{
    sequelize,
    modelName:"Notas"
})
usuarios.hasMany(Notas)
Notas.belongsTo(usuarios)
tipos.hasOne(Notas)
Notas.belongsTo(tipos)
sequelize.sync()
module.exports = Notas
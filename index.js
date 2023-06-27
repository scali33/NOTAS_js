const express = require('express')
const cors = require('cors')
const consign = require('consign')
const app = express()



//const usuario = new require('./models/usuario')
//const pet = new require('./models/pet')
//const doacao = new require('./models/doacao')

var porta = '3200'

app.use(cors())

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get('/',(req, res)=>res.send('gerenciamento de tarefas'))

//rotas
consign()
    .include('controllers/rotas')
    .into(app)


//fim codigo
app.listen(porta, ()=>console.log('server running on '+porta))

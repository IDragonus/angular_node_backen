const express = require('express')
const bodyParser = require('body-parser')
const apiRouter = require('./routes/api')

const app = express()

// Requerimos la base de datos
require('./db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Settings: aqui estamos indicando el numero del puerto
app.set('port', process.env.PORT || 4000)

// Aqui solicitamos un mensaje en consola concatenando el puerto que hemos definido
app.listen(app.get('port'), () => {
    console.log('Servidor ejecutanto en el puerto ', app.get('port'))
})

// Middleware
app.use(express.json())


// Routes de la API
app.use('/api', apiRouter)
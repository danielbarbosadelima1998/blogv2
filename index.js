const express = require('express');
const app = express();
const routes = require('./src/routes')

require('dotenv').config()

const Port = process.env.PORT
const Base_url = process.env.BASE_URL

routes.map(route => app.use(route))

app.listen(Port, () => {
    console.log(`Servidor rodando em ${Base_url}:${Port}`)
})
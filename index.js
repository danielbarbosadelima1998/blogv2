require('dotenv').config()

const express = require('express');
const Sequelize = require('sequelize');
const morgan = require('morgan')
const http = require('http')
const app = express();
const server = http.createServer(app);

const database = require('./src/config/database');
const routes = require('./src/routes')
const { Authors } = require('./src/models')

// midlewares
const socket = require('./src/middlewares/socket');

const io = require('socket.io')(server);

app.use(express.json())
app.use(morgan('dev'))
app.use(socket(io));

const sequelize = new Sequelize(database);
Authors.init(sequelize)

const Port = process.env.PORT
const Base_url = process.env.BASE_URL

routes.map(route => app.use(route))

server.listen(Port, () => {
    console.log(`Servidor rodando em ${Base_url}:${Port}`)
})
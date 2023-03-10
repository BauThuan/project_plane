const express = require('express')
const cors = require('cors')
const {Sequelize} = require('sequelize')
const PORT = 5000
const apiCustomer = require('./src/routers/apiCustomer.js')
const apiFlight = require('./src/routers/apiFlight')
const apiTicket = require('./src/routers/apiTicket')
const apiPlane = require('./src/routers/apiPlane')

const sequelize = new Sequelize('aviaco', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
  });
const connectDB = async () => {
    
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectDB()
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/customer', apiCustomer)
app.use('/api/flight', apiFlight)
app.use('/api/ticket', apiTicket)
app.use('/api/plane', apiPlane)

app.listen(PORT, () => console.log(`app listened on port: ${PORT}`))

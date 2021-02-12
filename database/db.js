const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv').config()

const sequelize = new Sequelize({
  dialect: 'mysql',
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
})

let execAuth = async () => {
  try {
    await sequelize.authenticate()
    console.log('Sequelize connected.')
  } catch(e) {
    console.error('Unable to connect Sequelize.', e)
  }
}
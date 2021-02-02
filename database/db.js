const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  username: 'root',
  password: '',
})

let execAuth = async () => {
  try {
    await sequelize.authenticate()
    console.log('Sequelize connected.')
  } catch(e) {
    console.error('Unable to connect Sequelize.', e)
  }
}
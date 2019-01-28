const Sequelize = require('sequelize');

const connection = new Sequelize('todo_list',' root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
}); 

connection 
    .authenticate()
    .then(()=> console.log('Successfully connected to the database'))
    .catch(()=> console.log('Error establishing connection to the database'))

module.exports = connection;

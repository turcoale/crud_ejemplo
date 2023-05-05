const Sequelize = require('sequelize');

const FilmModel = require('./models/films');

const sequelize = new Sequelize('sistema', 'crud', 'qwertyw813', { 
    host: 'localhost',
    dialect: 'mysql'
});

const Film = FilmModel(sequelize, Sequelize);

sequelize.sync({force: false})
    .then(() => { console.log('Tablas sincronizadas')
    })

    module.exports = {
        Film
    }
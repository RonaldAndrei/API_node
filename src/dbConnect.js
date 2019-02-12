'use strict';

const sequelize = require("sequelize");
const connection = new sequelize('api_node', 'root', 'root', {host: 'localhost', dialect: 'mysql'});

module.exports = connection;

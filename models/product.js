'use strict';

const sequelize = require("sequelize");
const dbConnect = require('../src/dbConnect');

const product = dbConnect.define('product', {
    title: {
        type: sequelize.STRING,
        allowNull: false,
        lowercase: true,
        trim: true
    },
    slug: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true,
        lowercase: true,
        trim: true
    },
    description: {
        type: sequelize.TEXT,
        allowNull: false,
        lowercase: true,
        trim: true
    },
    price: {
        type: sequelize.DECIMAL(10, 2),
        allowNull: false,
        lowercase: true,
        trim: true,
        validate: { min: 0}
    },
    active: {
        type: sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 1
    },
    tag: {
        type: sequelize.JSON,
        allowNull: false,
        lowercase: true,
        trim: true
    }
});

product.sync();

module.exports = product;


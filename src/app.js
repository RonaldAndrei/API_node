'use strict'
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

// carrega models
const product = require("../models/product");
// carrega rotas
const indexRoute = require("./routes/index_route");
const productRoute = require("./routes/product_route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;
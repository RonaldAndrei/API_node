'use strict';

const sequelize = require("sequelize");
const dbConnect = require('../dbConnect');
const Product = require('../../models/product');
const {or, and, gt, gte, lt, lte, like, notLike} = sequelize.Op;

exports.get = (req, res, next) => {
    dbConnect.sync().then(function () {
        Product.findAll({
            where: {
                active: 1
            }
        }).then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
    });
};

exports.getBySlug = (req, res, next) => {
    dbConnect.sync().then(function () {
        Product.findOne({
            where: {
              slug: req.params.slug,
              active: 1
            }
        }).then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
    });
};

exports.post = (req, res, next) => {
    dbConnect.sync().then(function () {
        Product.create({
            title: req.body.title,
            slug: req.body.slug,
            description: req.body.description,
            price: req.body.price,
            active: req.body.active,
            tag: req.body.tag
        }).then(x => {
            res.status(201).send({ message: "Produto cadastrado com sucesso!" });
        }).catch(e => {
            res.status(400).send({ message: "Falha ao cadastrar o produto", data: e });
        });
    });
};

exports.put = (req, res, next) => {
    dbConnect.sync().then(function () {
        Product.update({
            title: req.body.title,
            slug: req.body.slug,
            description: req.body.description,
            price: req.body.price,
            active: req.body.active,
            tag: req.body.tag
        },{
            where: { 
                id: req.params.id 
            } 
        }).then(data => {
            res.status(200).send({ message: "Produto atualizado com sucesso!" });
        }).catch(e => {
            res.status(400).send({ message: "Falha ao atualizar o produto", data: e });
        });
    });
};

exports.delete = (req, res, next) => {
    dbConnect.sync().then(function () {
        Product.update({
            active: 0,
        },{
            where: { 
                id: req.body.id 
            } 
        }).then(data => {
            res.status(200).send({ message: "Produto removido com sucesso!" });
        }).catch(e => {
            res.status(400).send({ message: "Falha ao remover o produto", data: e });
        });
    });
};
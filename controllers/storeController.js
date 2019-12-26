const express = require('express');

const Store = require('../databases/connections');
// exports.homePage = (req,res) => {
//     res.json([1,2]);
// }

exports.index = (req,res) => {
    Store.findAll()
    .then(result => {
        res.send(result)
    });
}

exports.store = (req,res) => {
    Store.create({
        content: req.body.content
    })
    .then(result => {
        return res.send(result)
    });
}




exports.destroy = (req,res) => {
    Store.destroy({
        where: {
            id: req.params.id
        }
    })
    .then( stores => {
        res.send('deleted')
      });
}


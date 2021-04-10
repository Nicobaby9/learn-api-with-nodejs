'use strict';

const response = require('../res');
const connection = require('../connection');

exports.test = function(req, res) {
    response.ok('REST API App is running.', res);
};

exports.index = (req, res) => {
    connection.query('SELECT * FROM mahasiswa', (error, rows, fields) => {
        if(error) {
            connection.log(error);
        }else {
            response.ok(rows, res);
        }
    });
}
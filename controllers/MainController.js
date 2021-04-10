'use strict';

const response = require('../res');
const connection = require('../connection');

exports.test = function(req, res) {
    response.ok('REST API App is running.', res);
};

exports.index = (req, res) => {
    connection.query('SELECT * FROM mahasiswa', (error, rows, fields) => {
        if(error) {
            console.log(error);
        }else {
            response.ok(rows, res);
        }
    });
}

exports.show = (req, res) => {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id=?', [id], (error, rows, fields) => {
        if(error) {
            console.log(error);
        }else {
            response.ok(rows, res);
        }
    });
};

exports.store = (req, res) => {
    let name = req.body.name;
    let nim = req.body.nim;
    let major = req.body.major;

    connection.query('INSERT INTO mahasiswa (nim, name, major) VALUES (?,?,?)', [name, nim, major], (error, rows, fields) => {
        if(error) {
            console.log(error);
        }else {
            response.ok('Success, data created.', res);
        }
    });

};
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
};

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

    connection.query('INSERT INTO mahasiswa (name, nim, major) VALUES (?,?,?)', [name, nim, major], (error, rows, fields) => {
        if(error) {
            console.log(error);
        }else {
            response.ok('Success, data created.', res);
        }
    });

};

exports.update = (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    let nim = req.body.nim;
    let major = req.body.major;

    connection.query('UPDATE mahasiswa SET name=?, nim=?, major=? WHERE id=?', [name, nim, major, id], (error, rows, fields) => {
        if(error) {
            console.log(error);
        }else {
            response.ok('Success, data was updated.', res);
        }
    });
};

exports.destroy = (req, res) => {
    let id = req.params.id;
    connection.query('DELETE FROM mahasiswa WHERE id=?', [id], (error, rows, fields) => {
        if(error) {
            console.log(error);
        }else {
            response.ok('Success, data was successfully deleted.', res);
        }
    });
};

exports.groupMataKuliah = (req, res) => {
    connection.query('SELECT mahasiswa.id, mahasiswa.name, mahasiswa.nim, mahasiswa.major, mata_kuliah.mata_kuliah, mata_kuliah.sks FROM krs JOIN mata_kuliah JOIN mahasiswa WHERE id_matakuliah = mata_kuliah.id AND id_mahasiswa = mahasiswa.id ORDER BY mahasiswa.id', 
    (error, rows, fields) => {
        if(error) {
            console.log(error);
        }else {
            response.nested(rows, res);
        }
    });
}
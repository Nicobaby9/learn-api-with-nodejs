'use strict';

module.exports = function(app) {
    const mahasiswa = require('../controllers/MainController');

    app.route('/').get(mahasiswa.test);
    app.route('/mahasiswa').get(mahasiswa.index);
    app.route('/mahasiswa/:id').get(mahasiswa.show);
    app.route('/create/mahasiswa').post(mahasiswa.store);
    app.route('/edit/mahasiswa/:id').put(mahasiswa.update);
    app.route('/delete/mahasiswa/:id').delete(mahasiswa.destroy);

    app.route('/group/matakuliah').get(mahasiswa.groupMataKuliah);
};
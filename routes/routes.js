'use strict';

module.exports = function(app) {
    const jsonku = require('../controllers/MainController');

    app.route('/').get(jsonku.test);
    app.route('/mahasiswa').get(jsonku.index);
    app.route('/mahasiswa/:id').get(jsonku.show);
};
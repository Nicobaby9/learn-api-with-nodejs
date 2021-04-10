'use strict';

moduls.exports = function(app) app) {
    const jsonku = require('../controllers/controller');

    app.route('/').get(jsonku.index);
};
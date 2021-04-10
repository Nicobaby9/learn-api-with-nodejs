'use strict';

module.exports = function(app) {
    const jsonku = require('../controllers/MainController');

    app.route('/').get(jsonku.index);
};
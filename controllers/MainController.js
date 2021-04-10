'use strict';

const response = require('../res');
const connection = require('../connection');

exports.index = function(req, res) {
    response.ok('REST API App is running.');
}
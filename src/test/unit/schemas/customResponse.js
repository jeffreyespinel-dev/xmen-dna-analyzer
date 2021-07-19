const Joi = require('joi');

const response = {
    status: Joi.number().required()
};

module.exports = {
    response
};

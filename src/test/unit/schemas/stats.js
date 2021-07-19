const Joi = require('joi');

const stats = {
    count_human_dna: Joi.number().required(),
    count_mutant_dna: Joi.number().required(),
    ratio: Joi.number().required(),
};

module.exports = {
    stats
};

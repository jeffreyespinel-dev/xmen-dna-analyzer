'use strict';

const { MeliDnaStatsModel } = require('../model/dnaStats');

var AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });
const queryStatsFields = Object.keys(MeliDnaStatsModel.schemas[0].schemaObject);

const getStats = async () => {
    try {
        const result = await MeliDnaStatsModel.query({ statsId: "0" })
            .attributes(queryStatsFields)
            .exec();

        const DEFAULT_STATS = {
            count_mutant_dna: 0,
            count_human_dna: 0,
            ratio: 0
        };

        return result.length > 0 ? result[0] : DEFAULT_STATS;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getStats
};
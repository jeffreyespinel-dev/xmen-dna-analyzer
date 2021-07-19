const DnaBll = require('../../lib/dna');
const Stats = require('./mocks/stats');

const { MeliDnaStatsModel } = require('../../model/dnaStats');
const Joi = require('joi');
const JoiOptions = {
    allowUnknown: true
};
const schemas = require('./schemas/stats');

describe('Get Stats of DNA Analizer.', () => {

    const fakeStacks = new Stats();
    MeliDnaStatsModel.query = () => fakeStacks;

    test('Should have the necessary fields.', async () => {
        const result = await DnaBll.getStats();
        let { error, value } = Joi.object().keys(schemas.stats).validate(result, JoiOptions);
        expect(error).toEqual(undefined);
    });
});
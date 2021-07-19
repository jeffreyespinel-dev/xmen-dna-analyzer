const {
    ForbiddenError,
    MutantResponse
} = require('../../lib/utils/customResponse');
const Joi = require('joi');
const JoiOptions = {
    allowUnknown: true
};
const schemas = require('./schemas/customResponse');

describe('Validate Forbidden Response.', () => {
    test('Validate schema.', async () => {
        const result = await new ForbiddenError(`It's an human dna.`); 
        let { error, value } = Joi.object().keys(schemas.response).validate(result, JoiOptions);
        expect(error).toEqual(undefined);
    });

    test('Should return an 403 error.', () => {
        const result = new ForbiddenError(`It's an human dna.`);
        expect(result.status).toEqual(403);
    });
});

describe('Validate Mutant Response.', () => {
    test('Validate schema.', async () => {
        const result = await new ForbiddenError(`It's an human dna.`); 
        let { error, value } = Joi.object().keys(schemas.response).validate(result, JoiOptions);
        expect(error).toEqual(undefined);
    });

    test('Should return a status 200.', () => {
        const result = new MutantResponse();
        expect(result.status).toEqual(200);
    });
});
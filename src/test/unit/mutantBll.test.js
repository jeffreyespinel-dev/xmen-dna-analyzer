const MutantBll = require('../../lib/mutant');
let { sendMutantDna } = require('../../services/xmenQueueService');
const DnaMocks = require('./mocks/dna');
const { ForbiddenError, MutantResponse, BadRequestError } = require('../../lib/utils/customResponse');
const {
    HUMAN_DNA_MSG,
    REQUIRED_DNA_MSG,
    INVALID_DNA_TYPE_MSG, } = require('../../lib/utils/constant');

describe('Analyze DNA.', () => {

    sendMutantDna = async (mutantInfo) => mutantInfo;
    const expectedForbiddenError = new ForbiddenError(HUMAN_DNA_MSG);
    const expectedMutantResponse = new MutantResponse();

    const expectedBadRequestErrorRequired = new BadRequestError(REQUIRED_DNA_MSG);
    const expectedBadRequestErrorWrongType = new BadRequestError(INVALID_DNA_TYPE_MSG);

    test('Should return forbidden error.', async () => {
        const humanDna = DnaMocks.humanDna;
        let error;
        try {
            let mutantObj = new MutantBll(humanDna);
            await mutantObj.analyzeDna();
        }
        catch (err) {
            error = err;
        }
        expect(error).toMatchObject(expectedForbiddenError);
    });

    test('Should return mutant message.', async () => {
        const mutantDna = DnaMocks.baseDna;
        let result;
        try {
            let mutantObj = new MutantBll(mutantDna);
            result = await mutantObj.analyzeDna();
        }
        catch (err) {
            result = err;
        }
        expect(result).toMatchObject(expectedMutantResponse);
    });

    test('Should return isMutant value in true.', async () => {
        const mutantDna = DnaMocks.baseDna;
        const sequencesIdentifiedInDirection = [1, 1];
        let mutantObj = new MutantBll(mutantDna);
        result = await mutantObj.isMutant(sequencesIdentifiedInDirection);
        expect(result).toEqual(true);
    });

    test('Should return isMutant value in false.', async () => {
        const mutantDna = DnaMocks.baseDna;
        const sequencesIdentifiedInDirection = [1];
        let mutantObj = new MutantBll(mutantDna);
        result = await mutantObj.isMutant(sequencesIdentifiedInDirection);
        expect(result).toEqual(false);
    });

    test('Should return bad request error because dna is undefined.', async () => {
        let result;
        try {
            let mutantObj = new MutantBll(undefined);
            result = await mutantObj.analyzeDna();
        }
        catch (err) {
            result = err;
        }
        expect(result).toMatchObject(expectedBadRequestErrorRequired);
    });

    test(`Should return bad request error because dna isn't an Array attribute.`, async () => {
        let result;
        try {
            let mutantObj = new MutantBll(1);
            result = await mutantObj.analyzeDna();
        }
        catch (err) {
            result = err;
        }
        expect(result).toMatchObject(expectedBadRequestErrorWrongType);
    });
});
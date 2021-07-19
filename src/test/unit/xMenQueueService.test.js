let { sendMutantDna } = require('../../services/xmenQueueService');
var AWS = require('aws-sdk');
const DnaMocks = require('./mocks/dna');
jest.mock('aws-sdk', () => {
    const SQSMocked = {
        sendMessage: jest.fn().mockReturnThis(),
        promise: jest.fn()
    };
    return {
        SQS: jest.fn(() => SQSMocked)
    };
});
const sqs = new AWS.SQS({
    region: 'us-east-1'
});


describe('Analyze DNA.', () => {
    beforeEach(() => {
        (sqs.sendMessage().promise).mockReset();
    });

    test(`Shouldn't return error.`, async () => {
        const dna = DnaMocks.baseDna;
        let error = null;
        try{
            const mutantInfo = {
                mutantId: dna.join(),
                dna,
                isMutant: true
            }
            sendMutantDna(mutantInfo)
        }catch(err){
            error = err;
        }
        expect(error).toEqual(null);
    });
});
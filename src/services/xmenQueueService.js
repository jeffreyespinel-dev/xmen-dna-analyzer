var AWS = require('aws-sdk');
if (AWS.config)
    AWS.config.update({ region: 'us-east-1' });
var sqs = new AWS.SQS();

const { QUEUE_URL } = require('../lib/utils/constant');

sendMutantDna = (mutantInfo) => {

    const info = {
        mutantId: {
            DataType: "String",
            StringValue: mutantInfo.mutantId
        }
    };

    const settings = {
        MessageAttributes: { ...info },
        MessageBody: JSON.stringify(mutantInfo),
        QueueUrl: QUEUE_URL
    };
    sqs.sendMessage(settings, (err, data) => {
        if (err) throw Error(err);
        return data.MessageId;
    })
}

module.exports = { sendMutantDna };
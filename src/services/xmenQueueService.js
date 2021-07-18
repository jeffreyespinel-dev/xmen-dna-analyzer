var AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });
var sqs = new AWS.SQS();

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
        QueueUrl: `https://sqs.us-east-1.amazonaws.com/793313263658/x-men-queue`
    };
    sqs.sendMessage(settings, (err, data) => {
        if (err) throw Error(err);
        return data.MessageId;
    })
}

module.exports = { sendMutantDna };
const N_LETTER_SEQUENCES_FOR_MUTANT = 4;
const MINIMAL_MATCHES_FOR_MUTANT = 2;
const VALID_LETTERS = ['A', 'T', 'C', 'G'];
const HUMAN_DNA_MSG = `It's human dna.`;
const REQUIRED_DNA_MSG = `dna attribute must be in the request body.` ;
const INVALID_DNA_TYPE_MSG = `dna attribute must be an Array of String.` ;

const QUEUE_URL = `https://sqs.us-east-1.amazonaws.com/793313263658/x-men-queue`;

module.exports = {
    N_LETTER_SEQUENCES_FOR_MUTANT,
    MINIMAL_MATCHES_FOR_MUTANT,
    VALID_LETTERS,
    HUMAN_DNA_MSG,
    REQUIRED_DNA_MSG,
    INVALID_DNA_TYPE_MSG,
    QUEUE_URL
}
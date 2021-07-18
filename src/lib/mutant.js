'use strict';
const DnaHelper = require('./utils/dnaHelper');
const { MINIMAL_MATCHES_FOR_MUTANT } = require('./utils/constant');
const { MutantResponse, ForbiddenError } = require('./utils/customResponse');
const { sendMutantDna } = require('../services/xmenQueueService');

class MutantBll {

    constructor(dna) {
        this._dna = dna;
        this._dnaInNitrogenousBases = DnaHelper.dnaInNitrogenousBasesFormat(dna);
        this._mutantId = dna.join();
    }

    get dna() {
        return this._dna;
    }

    get mutantId() {
        return this._mutantId;
    }

    get dnaInNitrogenousBases() {
        return this._dnaInNitrogenousBases;
    }

    get dnaInNitrogenousBasesVertical() {
        const dnaInNitrogenousBases = this.dnaInNitrogenousBases;
        return dnaInNitrogenousBases.map((col, i) => DnaHelper.getColumnInRow(dnaInNitrogenousBases, i));
    }

    get dnaInNitrogenousBasesDiagonal() {
        return DnaHelper.getDiagonalInRow(this.dnaInNitrogenousBases);
    }

    analyzeDna = async () => {
        let [horizontalSequencesCount, verticalSequencesCount, diagonalSequencesCount] = await Promise.all([
            this.dnaInNitrogenousBases.map(row => DnaHelper.identifySequencesInRow(row)),
            this.dnaInNitrogenousBasesVertical.map(row => DnaHelper.identifySequencesInRow(row)),
            this.dnaInNitrogenousBasesDiagonal.map(row => DnaHelper.identifySequencesInRow(row))
        ]);

        const sequences = [...horizontalSequencesCount, ...verticalSequencesCount, ...diagonalSequencesCount].filter(e => e > 0);
        const isMutant = this.isMutant(sequences);

        try {
            const mutantInfo = {
                mutantId: this.mutantId,
                dna: this.dna,
                isMutant
            }
            const scheduleRegister = await sendMutantDna(mutantInfo);
        } catch (e) {
            throw Error(e);
        }

        if (!isMutant) throw new ForbiddenError(`It's human dna.`);
        return new MutantResponse();
    };

    isMutant = (sequences) => sequences.length >= MINIMAL_MATCHES_FOR_MUTANT;
}

module.exports = MutantBll;

'use strict';
const {
    N_LETTER_SEQUENCES_FOR_MUTANT,
    VALID_LETTERS
} = require('./constant');
class DnaHelper {

    static dnaInNitrogenousBasesFormat(dna) {
        return dna.map(vector => Array.from(vector));
    }

    /**
     *
     * @param {Array} dnaInNitrogenousBasesFormat //DNA in Matrix format
     * @param {number} columnIndex
     */
    static getColumnInRow = (dnaInNitrogenousBasesFormat, columnIndex) => {
        let row = [];
        for (let i = 0; i <= dnaInNitrogenousBasesFormat.length - 1; i++) {
            row.push(dnaInNitrogenousBasesFormat[i][columnIndex]);
        }
        return row;
    }

    /**
     *
     * @param {Array} dnaInNitrogenousBasesFormat //DNA in Matrix format
     * @param {String} direction
     */
    static getDiagonalInRow = (dnaInNitrogenousBasesFormat) => {
        const maxSize = dnaInNitrogenousBasesFormat[0].length;
        let diagonalValues = [];
        for (var k = 0; k <= 2 * (maxSize - 1); ++k) {
            let valuesByDirection = [];
            for (let y = maxSize - 1; y >= 0; --y) {
                const x = k - y;
                if (x >= 0 && x < maxSize) valuesByDirection.push(dnaInNitrogenousBasesFormat[y][x]);
            }
            if (valuesByDirection.length >= N_LETTER_SEQUENCES_FOR_MUTANT) diagonalValues.push(valuesByDirection);
            //reverse direction
            let valuesByDirectionReverse = [];
            for (let y = maxSize - 1; y >= 0; --y) {
                var x = k - (maxSize - y);
                if (x >= 0 && x < maxSize) valuesByDirectionReverse.push(dnaInNitrogenousBasesFormat[y][x]);
            }
            if (valuesByDirectionReverse.length >= N_LETTER_SEQUENCES_FOR_MUTANT) diagonalValues.push(valuesByDirectionReverse);
        }
        return diagonalValues;
    }

    static identifySequencesInRow = (row) => {
        const maxIndex = row.length;
        let nSequences = 0;
        for (const [index, char] of row.entries()) {
            if (!VALID_LETTERS.includes(char)) continue;
            const missingForEvaluate = maxIndex - N_LETTER_SEQUENCES_FOR_MUTANT;
            if (index <= missingForEvaluate) {
                let sequenceCount = 0;
                const topIndex = index + N_LETTER_SEQUENCES_FOR_MUTANT;
                let i = index + 1;
                let stopAnalyze = false;
                while (i < maxIndex && i < topIndex && !stopAnalyze) {
                    if (char != row[i])
                        stopAnalyze = true;
                    else
                        sequenceCount++;
                    i++;
                }
                if (sequenceCount + 1 >= N_LETTER_SEQUENCES_FOR_MUTANT) nSequences++;
            }
        }
        return nSequences;
    }
}
module.exports = DnaHelper;

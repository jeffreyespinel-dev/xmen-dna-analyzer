const DnaHelper = require('../../lib/utils/dnaHelper');
const {
    N_LETTER_SEQUENCES_FOR_MUTANT
} = require('../../lib/utils/constant');
const DnaMocks = require('./mocks/dna');

describe('Get a valid DNA in Nitrogenous Bases Format.', () => {
    test('Should return dna as matrix.', () => {
        const result = DnaHelper.dnaInNitrogenousBasesFormat(DnaMocks.basicInput);
        expect(result).toEqual(
            expect.arrayContaining([
                expect.arrayContaining(DnaMocks.basicInputMatrix[0]),
                expect.arrayContaining(DnaMocks.basicInputMatrix[1])
            ])
        );
    });

    test('Should return a 6X6 matrix.', () => {
        const result = DnaHelper.dnaInNitrogenousBasesFormat(DnaMocks.baseDna);
        expect(result.length).toEqual(6);
    });

    test(`First Element is the letter A.`, () => {
        const result = DnaHelper.dnaInNitrogenousBasesFormat(DnaMocks.basicInput);
        expect(result[0]).toContain('A');
    })
});

describe('Get a matrix in vertical direction.', () => {
    test('Should valid the columns of DNA in vertical direction.', () => {
        const result = DnaHelper.getColumnInRow(DnaMocks.basicInputMatrix, 0);
        expect(result).toEqual(
            expect.arrayContaining(DnaMocks.basicInputMatrixVertical[0])
        );
    });

    test('Should return a 6X6 matrix.', () => {
        const result = DnaHelper.getColumnInRow(DnaMocks.baseDna, 0);
        expect(result.length).toEqual(6);
    });

    test('Validate values for the 6X6 matrix.', () => {
        const result = DnaHelper.getColumnInRow(DnaMocks.baseDna, 0);
        expect(result).toEqual(
            expect.arrayContaining(DnaMocks.baseDnaVertical[0])
        );
    });
});

describe('Get a matrix in diagonal direction.', () => {
    test('Validate values for the 6X6 matrix.', () => {
        const result = DnaHelper.getDiagonalInRow(DnaMocks.baseDna);
        expect(result[0]).toEqual(
            expect.arrayContaining(DnaMocks.baseDnaDiagonal[0])
        );
    });

    test(`Shouldn't have an array with length less than N_LETTER_SEQUENCES_FOR_MUTANT.`, () => {
        const result = DnaHelper.getDiagonalInRow(DnaMocks.baseDna);
        const valuesWithLengthLessThanFour = result.filter(row => row.length < N_LETTER_SEQUENCES_FOR_MUTANT);
        expect(valuesWithLengthLessThanFour.length).toEqual(0);
    });
});

describe('Get positions with sequence.', () => {
    test('Should return an 0 as sequence quantity identified.', () => {
        const dnaInNitrogenousBasesFormat = DnaHelper.dnaInNitrogenousBasesFormat(DnaMocks.baseDna);
        const result = DnaHelper.identifySequencesInRow(dnaInNitrogenousBasesFormat[0]);
        expect(result).toEqual(0);
    });

    test('Should return an 1 as sequence quantity identified.', () => {
        const dnaInNitrogenousBasesFormat = DnaHelper.dnaInNitrogenousBasesFormat(DnaMocks.baseDna);
        const result = DnaHelper.identifySequencesInRow(dnaInNitrogenousBasesFormat[4]);
        expect(result).toEqual(1);
    });

    test('Should return an 0 as sequence quantity identified in diagonal direction.', () => {
        const dnaValuesInDiagonalDirection = DnaHelper.getDiagonalInRow(DnaMocks.baseDna);
        const result = DnaHelper.identifySequencesInRow(dnaValuesInDiagonalDirection[0]);
        expect(result).toEqual(0);
    });

    test('Should return an 1 as sequence quantity identified in diagonal direction.', () => {
        const dnaValuesInDiagonalDirection = DnaHelper.getDiagonalInRow(DnaMocks.baseDna);
        const result = DnaHelper.identifySequencesInRow(dnaValuesInDiagonalDirection[6]);
        expect(result).toEqual(1);
    });
});
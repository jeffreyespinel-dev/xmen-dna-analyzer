const basicInput = ['AB', 'DE'];
const basicInputMatrix = [['A', 'B'], ['D', 'E']];
const basicInputMatrixVertical = [['A', 'D'], ['B', 'E']];

const baseDna = [
    "ATGCGA",
    "CAGTGC",
    "TTATGT",
    "AGAAGG",
    "CCCCTA",
    "TCACTG"
];

const baseDnaVertical = [
    ['A', 'C', 'T', 'A', 'C', 'T'],
    ['T', 'A', 'T', 'G', 'C', 'C'],
    ['G', 'G', 'A', 'A', 'C', 'A'],
    ['C', 'T', 'T', 'A', 'C', 'C'],
    ['G', 'G', 'G', 'G', 'T', 'T'],
    ['A', 'C', 'T', 'G', 'A', 'G']
];

const baseDnaDiagonal = [
    ['A', 'T', 'G', 'C'],
    ['C', 'G', 'A', 'T', 'G'],
    ['C', 'C', 'G', 'T'],
    ['T', 'C', 'A', 'T', 'G', 'A'],
    ['T', 'C', 'A', 'T', 'C'],
    ['C', 'C', 'A', 'G', 'C'],
    ['G', 'T', 'A', 'A', 'A', 'A'],
    ['A', 'C', 'G', 'T'],
    ['A', 'G', 'T', 'G', 'T'],
    ['G', 'G', 'T', 'G']
];


const humanDna = [
    "ATGC1A",
    "CAGTGC",
    "TTATGT",
    "AGA1GG",
    "CCCCTA",
    "TCACTG"
];

module.exports = {
    basicInput,
    basicInputMatrix,
    basicInputMatrixVertical,
    baseDna,
    baseDnaVertical,
    baseDnaDiagonal,
    humanDna
};


class ForbiddenError extends Error {
    constructor(message) {
        super('Forbidden action.');
        this.status = 403;
        this.message = message;
    }
}

class BadRequestError extends Error {
    constructor(message) {
        super('BadRequestError action.');
        this.status = 400;
        this.message = message;
    }
}

class MutantResponse {
    constructor() {
        this.status = 200;
        this.message = `It's mutant dna.`;
    }
}

module.exports = {
    ForbiddenError,
    MutantResponse,
    BadRequestError
}
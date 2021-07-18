'use strict';
const MutantBll = require('../lib/mutant');

class MutantController {

    /**
     *
     * @param {Object} req
     * @param {Object} res
     * @param {Function} next
     */
    static async analyzeDna(req, res, next) {
        try {
            let { dna } = req.body;
            let mutantObj = new MutantBll(dna);
            const result = await mutantObj.analyzeDna(dna);
            res.json(result);
        }
        catch (error) {
            next(error);
        }
    }

}

module.exports = MutantController;

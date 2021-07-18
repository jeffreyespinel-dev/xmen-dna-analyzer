'use strict';
const dnaBll = require('../lib/dna');

class DnaController {

    /**
     *
     * @param {Object} req
     * @param {Object} res
     * @param {Function} next
     */
    static async getStats(req, res, next) {
        try {
            const result = await dnaBll.getStats();
            res.json(result);
        }
        catch (error) {
            next(error);
        }
    }

}

module.exports = DnaController;

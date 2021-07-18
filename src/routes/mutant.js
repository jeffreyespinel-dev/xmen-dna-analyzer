'use strict';

const express = require('express');
const router = express.Router({ mergeParams: true });
const MutantController = require('../controller/mutantController');

router.post('/', MutantController.analyzeDna);

module.exports = router;
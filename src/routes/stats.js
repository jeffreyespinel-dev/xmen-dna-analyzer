'use strict';

const express = require('express');
const router = express.Router({ mergeParams: true });
const DnaController = require('../controller/dnaController');

router.get('/', DnaController.getStats);

module.exports = router;
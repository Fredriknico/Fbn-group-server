﻿const express = require('express');
const router = express.Router();

// API  MODULE
router.use('/hsb', require('./hsb'));

router.use('/sg', require('./sg'));

module.exports = router;

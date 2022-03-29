const express = require('express');
const router = express.Router();
const db = require('../db/Sequelize.js');
// const typeofexcursion = require('../models/typeofexcursion.model.js')

router.get('/', (req, res) => res.send('gigs'))

module.exports = router;


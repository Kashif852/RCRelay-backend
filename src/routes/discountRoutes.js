const express = require('express');
const router = express.Router();
const { getDiscounts } = require('../controllers/discountsController');

router.get('/', getDiscounts);

module.exports = router;

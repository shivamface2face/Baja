const express = require('express');

const router = express.Router();

const logicController = require('../controllers/logicControllers')

router.post('/bfhl', logicController.postLogic);

module.exports = router;